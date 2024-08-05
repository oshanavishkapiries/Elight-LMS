import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Profile from "./Profile";
import Notification from "./Notification";

const Nav = () => {
  return (
    <header className="sticky top-0 z-30 w-full hidden md:flex h-16 items-center justify-between border-b bg-muted px-4 sm:px-6">
      <div className="relative flex-1">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg pl-8 sm:w-[200px] lg:w-[300px]"
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
