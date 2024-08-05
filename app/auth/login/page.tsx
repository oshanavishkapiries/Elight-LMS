import { general } from "@/data/general";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GlobalImage from "@/components/sub/GlobalImage";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <Card className="max-w-[410px] w-full h-full mx-2 overflow-hidden">
       
        <div className="w-full flex flex-col justify-center items-center py-10">
          <Link href={"/"}>
            <GlobalImage
              src={general.img.logo_img}
              alt={"logo"}
              width={1500}
              height={1000}
              className="max-w-[120px] object-cover mb-5"
            />
          </Link>
          <div className="grid px-5 gap-6">
            <div className="grid gap-2 text-center">
              <p className="text-sm text-muted-foreground">
                Please Login to continue.
              </p>
            </div>

            <Button
              variant="outline"
              className="w-full flex gap-2 bg-muted hover:scale-110 transition-transform"
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
