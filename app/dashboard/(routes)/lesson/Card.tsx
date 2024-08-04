import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface LessonCardProps {
  name: string;
  icon: React.ReactElement;
  type: string;
  url: string;
}

export const LessonCard = ({name,icon,type,url}:LessonCardProps) => {
  return (
    <Link href={`lesson/${url}`} passHref>
    <Card  className="group hover:shadow-lg transition-all cursor-pointer">
      <CardHeader>
        <CardTitle className="flex justify-between group-hover:underline transition-all">{name}{icon}</CardTitle>
      </CardHeader>
      <CardFooter>
        <p>{type}</p>
      </CardFooter>
    </Card>
    </Link>
  );
};
