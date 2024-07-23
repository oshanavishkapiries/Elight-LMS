import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SearchIcon,
  BellIcon,
  CalendarIcon,
  MessageCircleIcon,
  AwardIcon,
} from "lucide-react";
import Profile from "./Profile";
import Notification from "./Notification";

const Nav = () => {
  return (
    <header className="sticky top-0 z-30 w-full flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
      <div className="relative flex-1">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-muted pl-8 sm:w-[200px] lg:w-[300px]"
        />
      </div>
      <div className="flex items-center gap-4">
        {/* Notification */}
        <Notification />
        {/* Profile */}
        <Profile />
      </div>
    </header>
  );
};

export default Nav;
