import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu";
import { AwardIcon, BellIcon, CalendarIcon, MessageCircleIcon } from "lucide-react";

const Notification = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon" className="rounded-full">
        <BellIcon className="h-5 w-5" />
        <span className="sr-only">Notifications</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Notifications</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4" />
          <div>
            <p className="font-medium">New Assignment</p>
            <p className="text-xs text-muted-foreground">Due tomorrow</p>
          </div>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div className="flex items-center gap-2">
          <MessageCircleIcon className="h-4 w-4" />
          <div>
            <p className="font-medium">New Message</p>
            <p className="text-xs text-muted-foreground">From John Doe</p>
          </div>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div className="flex items-center gap-2">
          <AwardIcon className="h-4 w-4" />
          <div>
            <p className="font-medium">New Achievement</p>
            <p className="text-xs text-muted-foreground">
              You earned a badge
            </p>
          </div>
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default Notification