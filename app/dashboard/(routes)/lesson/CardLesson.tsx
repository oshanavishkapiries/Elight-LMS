import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

interface CardLessonProps {
  title: string;
  class: string;
  icon: React.ReactNode;
}
const CardLesson = ({ title, class: LClass, icon }: CardLessonProps) => {
  return (
    <Card className="group cursor-pointer">
      <CardHeader className="flex justify-between transition-shadow group-hover:shadow-lg">
        <h1 className="text-xs">{LClass}</h1>
        <CardTitle className="flex justify-between group-hover:underline transition-all">
          {title}
          <div>
            {icon}
          </div>
        </CardTitle>
        <CardDescription>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default CardLesson;
