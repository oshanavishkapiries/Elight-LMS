import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import { mobileBottomNav } from "@/data/mobileBottomNav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-card shadow-lg md:hidden">
      <div className="flex h-16 items-center justify-around">
        {mobileBottomNav.map((item, index) => {
          if (item.isSheetTrigger) {
            return (
              <Sheet key={index}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <item.icon className="h-6 w-6" />
                    <span className="sr-only">{item.label}</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="bottom"
                  className="bg-card rounded-t-xl mx-2"
                >
                  <div className="grid gap-4 p-4">
                    {item.sheetItems.map((sheetItem, sheetIndex) => (
                      <Link
                        key={sheetIndex}
                        href={sheetItem.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md hover:ps-6 transition-all",
                          pathname === sheetItem.href &&
                            "bg-primary font-semibold text-white"
                        )}
                        prefetch={false}
                      >
                        <sheetItem.icon className="h-5 w-5" />
                        {sheetItem.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            );
          } else {
            return (
              <Link href={item.href as string} prefetch={false} key={index}>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.label}</span>
                </Button>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
