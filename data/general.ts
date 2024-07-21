type IGeneral = {
    meta_name: string
    meta_description: string
    img: {
        lbanner_img: string,
        login_img: string
    }
}



export const general: IGeneral = {
    meta_name: "Elight LMS",
    meta_description: "Learning Management System",
    img: {
        lbanner_img: "/img/landingHero.jpg",
        login_img: "/img/loginImg.jpg"
    }
}