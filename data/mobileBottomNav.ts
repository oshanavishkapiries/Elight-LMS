import {
  BellIcon,
  BookOpenIcon,
  CalendarIcon,
  HomeIcon,
  InboxIcon,
  LayoutGridIcon,
  MenuIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";

export const mobileBottomNav = [
  {
    href: "#",
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
        icon: LayoutGridIcon,
        label: "Class",
        href: "#",
      },
      {
        icon: BookOpenIcon,
        label: "Lessons",
        href: "#",
      },
    ],
  },
  {
    href: "#",
    label: "Notifications",
    icon: BellIcon,
  },
  {
    href: "#",
    label: "Settings",
    icon: SettingsIcon,
  },
];
