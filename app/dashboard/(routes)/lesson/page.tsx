import React from "react";
import { LessonCard } from "./Card";
import { institut, Lessons } from "./data";
import BreadcrumbHead from "@/components/sub/PageBreadcrumb";
import CardLesson from "./CardLesson";
import PageSubTitle from "@/components/sub/PageSubTitle";

const LessonPage = () => {
  return (
    <div className="m-3 flex flex-col gap-5">
      <BreadcrumbHead title="Dashboard" subName="Lesson" />
      <PageSubTitle title="Your Insitude" />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {institut.map((item, index) => (
          <LessonCard key={index} {...item} />
        ))}
      </div>
      <PageSubTitle title="Your Latest Lessons" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {(Lessons || []).map((item, index) => (
          <CardLesson key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default LessonPage;
