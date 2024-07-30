import GlobalImage from "@/components/sub/GlobalImage";
import { Button } from "@/components/ui/button";
import "./page.css"

export default function Home() {
  return (
    <>
    <div className="bg-[#084965] background_img w-full min-h-[calc(100vh-65px)] grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#084965b7] order-2 md:order-2 flex flex-col justify-center items-center p-8">
        <GlobalImage
          src="https://student.echemistry.lk/assets/img/auth/login-side-step-01.svg"
          alt="Image"
          width={600}
          height={600}
          className="w-full max-w-md"
        />
      </div>
      <div className="bg-[#084965b7] order-1 md:order-1 flex flex-col justify-center items-center p-8">
        <GlobalImage
          src="https://student.echemistry.lk/assets/img/auth/login-side-logo.png"
          alt="Image"
          width={1200}
          height={600}
          className="w-full max-w-md mt-[50px] md:mt-0"
        />

        <p className="text-muted-foreground my-6 w-[60%] text-white text-center">
          ශ්‍රී ලංකාවේ විශාලතම e-lerning platform එක සමග සම්බන්ධ වී ඔබේ සිහින
          යථාර්තයක් කරගන්න
        </p>
        <div className="flex space-x-4">
          <Button className="rounded-full font-semibold w-[120px] bg-white text-black hover:scale-105">
            Register
          </Button>
          <Button className="rounded-full font-semibold w-[120px] bg-white text-black hover:scale-105">
            Class 🎉
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}
