import { LayoutGridIcon, BookOpenIcon, UserIcon, SettingsIcon } from "lucide-react";

interface IdashBoardNavData {
  icon: any;
  label: string;
  href: string;
}

export const dashBoardNavData: IdashBoardNavData[] = [
  {
    icon: LayoutGridIcon,
    label: "Class",
    href: "#"
  },
  {
    icon: BookOpenIcon,
    label: "Lessons",
    href: "#"
  },
  {
    icon: UserIcon,
    label: "Profile",
    href: "#"
  },
  {
    icon: SettingsIcon,
    label: "Settings",
    href: "#"
  },
];

