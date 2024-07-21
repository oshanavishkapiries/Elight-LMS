const LBanner = () => {
  return (
    <div className="w-full  overflow-hidden grid  grid-cols-1 md:grid-cols-2">
      {/* Left side */}
      <div className="w-full h-full order-2 md:order-1 text-center md:text-left justify-center flex flex-col ">
        <h6 className=" text-stone-900 text-[12px] font-normal uppercase ">
          Combined maths with
        </h6>
        <h1 className="font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2  uppercase">
          Sujith <br className="hidden md:block" /> Sanjeewa
        </h1>
      </div>

      {/* Right side */}
      <div className="w-full h-full order-1 md:order-2 justify-center flex p-5 md:p-0">
        <img src="/img/landingHero.jpg" className="object-cover" />
      </div>
    </div>
  );
};

export default LBanner;
