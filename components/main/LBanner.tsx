const LBanner = () => {
  return (
    <div className="w-full md:aspect-[16/7] overflow-hidden grid  grid-cols-1 md:grid-cols-2">
      {/* Left side */}
      <div className="w-full h-full order-2 md:order-1">
        <h1>bdfjvfbvjhfbhdb</h1>
      </div>

      {/* Right side */}
      <div className="w-full h-full order-1 md:order-2 justify-center flex p-5 md:p-0">
        <img src="/img/landingHero.jpg" className="object-cover" />
      </div>
    </div>
  );
};

export default LBanner;
