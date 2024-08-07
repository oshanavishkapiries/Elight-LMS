import Link from "next/link";
import { footerData } from "@/data/footerData";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href={footerData.company.link} className="flex items-center gap-2" prefetch={false}>
          <Image
          src={footerData.company.logo}
          className="max-w-[85px] grayscale"
          alt={"logo"}
          width={120}
          height={40}
        />
          </Link>
        </div>
        {footerData.sections.map((section, index) => (
          <div key={index} className="grid gap-4">
            <h3 className="text-lg font-semibold">{section.title}</h3>
            <nav className="grid gap-2">
              {section.links.map((link, linkIndex) => (
                <Link key={linkIndex} href={link.href} className="text-sm text-muted-foreground hover:underline" prefetch={false}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>
      <div className="container max-w-7xl mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>&copy; {footerData.footer.year} {footerData.footer.companyName}. All rights reserved.</p>
        <p>
          Built with{" "}
          <Link href={footerData.footer.builtWith.link} className="text-muted-foreground hover:underline" prefetch={false}>
            {footerData.footer.builtWith.name}
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
