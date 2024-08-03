import {
  LayoutGridIcon,
  BookOpenIcon,
  SettingsIcon,
  Phone,
  Bell,
  User,
  Info,
  LibraryBig,
} from "lucide-react";

interface IdashBoardNavData {
  icon: any;
  label: string;
  href: string;
}

export const dashBoardNavData: IdashBoardNavData[] = [
  {
    icon: LayoutGridIcon,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: LibraryBig,
    label: "Class",
    href: "/dashboard/class",
  },
  {
    icon: BookOpenIcon,
    label: "Lessons",
    href: "/dashboard/lesson",
  },
  {
    icon: Bell,
    label: "Notifications",
    href: "/dashboard/notification",
  },
  {
    icon: User,
    label: "Profile",
    href: "/dashboard/profile",
  },
  {
    icon: Phone,
    label: "Contacts",
    href: "/dashboard/contacts",
  },
  {
    icon: Info,
    label: "How to",
    href: "/dashboard/how-to",
  },
  {
    icon: SettingsIcon,
    label: "Settings",
    href: "/dashboard/settings",
  },
];
