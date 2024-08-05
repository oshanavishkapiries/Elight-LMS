import {
  BellIcon,
  BookOpenIcon,
  HomeIcon,
  Info,
  LibraryBig,
  MenuIcon,
  Phone,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";

export const mobileBottomNav = [
  {
    href: "/dashboard",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "#",
    label: "Search",
    icon: SearchIcon,
  },
  {
    label: "Menu",
    icon: MenuIcon,
    isSheetTrigger: true,
    sheetItems: [
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
        icon: Phone,
        label: "Contact",
        href: "/dashboard/contacts",
      },
      {
        icon: Info,
        label: "How To",
        href: "/dashboard/how-to",
      },
    ],
  },
  {
    href: "/dashboard/notification",
    label: "Notifications",
    icon: BellIcon,
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    icon: SettingsIcon,
  },
];
