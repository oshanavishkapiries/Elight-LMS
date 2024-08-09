import Link from 'next/link'
import Image from "next/image";

const Card = ({ title, image, year, colorTo = "ffffff", colorFrom = "000000" ,id}) => {
  return (
    <div
      className="h-48 w-full flex justify-between p-3 rounded-md"
      style={{
        background: `linear-gradient(to right, #${colorFrom}, #${colorTo})`,
      }}
    >
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <h1 className="text-base text-white">{year}</h1>
        </div>
        <div>
          <Link href={`class/${id}`} style={{background: '#2C9AFF'}} className=" font-semibold text-white px-4 py-1 rounded-sm">
            Watch Now
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <Image src={image} width={160} height={160} alt="Image description" />
      </div>
    </div>
  );
};

export default Card;
