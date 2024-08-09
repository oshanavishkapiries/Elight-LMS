"use client"
import React from "react";
import Card from "@/components/main/dashboard/class/Card";
import Image from "next/image";
import { institut } from "./data";

const ClassPage = () => {
  return (
    <div className="m-3 grid grid-cols-3 gap-4">
      {(institut || []).map((item, index) => (
        <Card key={index} {...item}    />
      ))}
    </div>
  );
};

export default ClassPage;
