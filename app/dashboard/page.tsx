import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { BookOpenIcon, FileTextIcon, LayoutGridIcon } from "lucide-react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="grid gap-6 p-4 sm:p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Classes</CardTitle>
            <CardDescription>
              View and manage your class information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">12</div>
              <LayoutGridIcon className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter>
            <Link
              href="#"
              className="text-sm font-medium text-primary"
              prefetch={false}
            >
              View Classes
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lessons</CardTitle>
            <CardDescription>
              Access and manage your lesson materials.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">48</div>
              <BookOpenIcon className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter>
            <Link
              href="#"
              className="text-sm font-medium text-primary"
              prefetch={false}
            >
              View Lessons
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Assignments</CardTitle>
            <CardDescription>
              Track and manage your assignment progress.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">24</div>
              <FileTextIcon className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter>
            <Link
              href="#"
              className="text-sm font-medium text-primary"
              prefetch={false}
            >
              View Assignments
            </Link>
          </CardFooter>
        </Card>
      </div>

      
    </div>
  );
};

export default DashboardPage;
