import { general } from "@/data/general";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <Card className="w-4/5 md:w-2/3 h-auto grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div className="w-full h-[450px] hidden md:block">
          <Image
            src={general.img.login_img}
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full h-[450px] flex justify-center items-center">
          <div className=" grid w-[350px] px-5 gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
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
