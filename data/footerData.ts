import { general } from "./general";
export const footerData = {
  company: {
    name: "Elight Team",
    logo: general.img.logo_img,
    link: "/",
  },
  sections: [
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Support", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Trademark", href: "#" },
      ],
    },
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Products", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
  ],
  footer: {
    year: 2024,
    companyName: "Elight Team",
    builtWith: {
      name: "Elight CMS",
      link: "#",
    },
  },
};
