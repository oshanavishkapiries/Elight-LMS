import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { MenuIcon, MountainIcon } from "lucide-react"

import { navLinks } from "@/data/navLinks"

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs">
        <div className="grid gap-4 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="outline" className="w-full">
            Login
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

const Navbar = () => {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 sm:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Acme Inc</span>
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium transition-colors hover:text-primary"
            prefetch={false}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="outline" className="hidden sm:inline-flex">
          Login
        </Button>
        <MobileNav />
      </div>
    </header>
  )
}

export default Navbar
