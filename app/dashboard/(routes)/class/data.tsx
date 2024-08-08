import { title } from "process";

interface Institut {
    id: number
    title: string
    image: string
    year: string
    colorFrom: string
    colorTo: string
}

export const institut: Institut[] = [
    {
        id: 1,
        title: "Rathnapura",
        image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1723009191/Teenage_girl_writing_something_ri4ppz.png",
        year: "2022-2023",
        colorFrom: "021526",
        colorTo: "6EACDA",
    },
    {
        id: 2,
        title: "Balangoda",
        image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1723009191/Teenage_girl_writing_something_ri4ppz.png",
        year: "2022-2023",
        colorFrom: "15435D",
        colorTo: "7C00FE",
    },
    {
        id: 3,
        title: "Nuwara",
        image: "https://res.cloudinary.com/dldtrjalo/image/upload/v1723009191/Teenage_girl_writing_something_ri4ppz.png",
        year: "2022-2023",
        colorFrom: "021526",
        colorTo: "7da0FE",
    }
]