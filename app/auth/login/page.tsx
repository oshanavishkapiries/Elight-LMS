import { general } from "@/data/general";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GlobalImage from "@/components/sub/GlobalImage";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <Card className="max-w-[610px] w-full h-full mx-2 md:h-[400px] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* left image */}
        <div className="w-full h-full overflow-hidden">
        <GlobalImage
          src={general.img.login_img}
          alt={"card_img"}
          width={1200}
          height={800}
          className="w-full object-cover hidden md:block"
        />
        </div>
        {/* right section */}
        <div className="w-full flex flex-col justify-center items-center py-10">
          <Link href={"/"}>
            <GlobalImage
              src={general.img.logo_img}
              alt={"logo"}
              width={50}
              height={50}
              className="h-32 w-32 object-cover"
            />
          </Link>
          <div className="grid px-5 gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-sm text-muted-foreground">
                Please Login to continue.
              </p>
            </div>

            <Button
              variant="outline"
              className="w-full flex gap-2 bg-muted hover:bg-primary hover:text-white"
            >
              <Image
                src="/svg/google.svg"
                alt="Image"
                width="40"
                height="40"
                className="w-4 h-4"
              />
              Login with Google
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
