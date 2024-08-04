import React from 'react';
import { Apple, BookCopy, BookOpen,  LockKeyhole, LockKeyholeOpen } from "lucide-react";

interface Institut {
    id: number;
    name: string;
    icon: React.ReactElement;
    type: string;
    url: string;
}

export  const institut: Institut[] = [
    {
        id: 1,
        name: "Rathnapura",
        icon: <BookCopy />,
        type: "No Pay",
        url: "rathnapura",
    },
    {
        id: 2,
        name: "Balangoda",
        icon: <BookOpen />,
        type: "No Pay",
        url: "balangoda",
    },
    {
        id: 3,
        name: "Online",
        icon: <Apple />,
        type: "Free",
        url: "online"
    },
];

interface Lessons {
    id: number;
    title: string;
    class: string;
    icon: React.ReactElement;
}

export const Lessons:Lessons[] = [
    {
        id: 1,
        title: "Mechanics of Physics",
        icon: <LockKeyholeOpen strokeWidth={2.25}  />,
        class: "2022-2024 Revision",
    },
    {
        id: 2,
        title: "Chemistry of Maths",
        icon: <LockKeyholeOpen strokeWidth={2.25}  />,
        class: "2022-2024 HallClass",
    },
    {
        id: 3,
        title: "Momentum of Electrons",
        icon: <LockKeyhole  strokeWidth={2.25}  />,
        class: "Free",
    },
    {
        id: 1,
        title: "Mechanics of Physics",
        icon: <LockKeyholeOpen strokeWidth={2.25}  />,
        class: "2022-2024 Revision",
    },
    {
        id: 2,
        title: "Chemistry of Maths",
        icon: <LockKeyholeOpen strokeWidth={2.25}  />,
        class: "2022-2024 HallClass",
    },
    {
        id: 3,
        title: "Momentum of Electrons",
        icon: <LockKeyhole strokeWidth={2.25}  />,
        class: "Free",
    },
]