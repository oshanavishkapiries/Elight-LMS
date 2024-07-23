import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Sider from "@/components/main/dashboard/Sider";
import {
  AwardIcon,
  BellIcon,
  BookOpenIcon,
  CalendarIcon,
  FileTextIcon,
  LayoutGridIcon,
  MessageCircleIcon,
  SearchIcon,
} from "lucide-react";
import Nav from "@/components/main/dashboard/Nav";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main className="grid min-h-screen w-full grid-cols-[240px_1fr] overflow-hidden">
        {/* sider */}
        <Sider />
        {/* dashboard-pages */}
        <div className="flex flex-col">
          {/* navbar */}
          <Nav />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </main>
    </>
  );
};

export default layout;
