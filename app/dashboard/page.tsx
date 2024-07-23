import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { BookOpenIcon, FileTextIcon, LayoutGridIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            View your recent class and assignment activity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Activity</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Submitted Assignment</div>
                  <div className="text-sm text-muted-foreground">
                    Math Homework
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap">2023-04-15</TableCell>
                <TableCell>
                  <Badge variant="secondary">Completed</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Attended Class</div>
                  <div className="text-sm text-muted-foreground">
                    History Lecture
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap">2023-04-12</TableCell>
                <TableCell>
                  <Badge variant="secondary">Present</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Viewed Lesson</div>
                  <div className="text-sm text-muted-foreground">
                    Biology Chapter 3
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap">2023-04-10</TableCell>
                <TableCell>
                  <Badge variant="outline">Incomplete</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Submitted Quiz</div>
                  <div className="text-sm text-muted-foreground">
                    English Literature
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap">2023-04-05</TableCell>
                <TableCell>
                  <Badge variant="secondary">Passed</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
