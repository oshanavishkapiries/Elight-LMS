import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GlobalImage from "./GlobalImage";

const CustomCard = () => {
  return (
    <Card className="overflow-hidden shadow-xl w-full">
      <div className="relative">
        <GlobalImage
          src={
            "https://res.cloudinary.com/dldtrjalo/image/upload/v1713958445/storydes_ggydqb.jpg"
          }
          alt={"card_img"}
          width={1200}
          height={800}
          className="w-full"
        />
        <div className="absolute top-0 left-0 p-3">
          <div className="bg-primary rounded-sm px-4 text-sm text-white">
            2022-2023
          </div>
        </div>
      </div>
      <CardHeader>
        <div className="flex mb-2">
          <div className="bg-amber-100 rounded-sm px-4 py-1">
            <CardDescription className="font-semibold text-xs opacity-80">
              Revision
            </CardDescription>
          </div>
        </div>
        <CardTitle className="text-xl">Mechanice Science</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          It is a long established fact that a reader will be distracted by the
          readable content of a
        </p>
      </CardContent>
      <CardFooter className="flex gap-3">
        <p className="text-[12px] opacity-65">Sujith Sanjeewa</p>
        <p className="text-[12px] opacity-65">2024 june 2</p>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
