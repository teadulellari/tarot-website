import React from "react";
import pic1 from "../assets/tarotreading1.png";
import pic2 from "../assets/tarotReading2.png";
import moon from "../assets/cartoon-moon1.png";

const Experience = () => {
  return (
    <div className="px-8 py-20">
      <div className="text-customColor2 text-center">
        <h1 className="text-3xl font-bold mb-12">Our Expertise</h1>
      </div>
      <div className="grid grid-cols-2 gap-12 justify-center">
        <div className="flex flex-col items-center justify-center gap-20">
          <div className="relative">
            <div className="blur-background"></div>
            <img src={pic1} alt="tarot reader" className="h-auto max-h-full rounded-lg" />
          </div>
          <div className="w-[200px] h-[200px] relative">
            <div className="moon-circle"></div>
            <img src={moon} alt="moon" className="h-auto max-h-full" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-20">
          <div className="w-[200px] h-[200px] relative">
            <div className="moon-circle"></div>
            <img src={moon} alt="moon" className="h-auto max-h-full" />
          </div>
          <div className="relative">
            <div className="blur-background"></div>
            <img src={pic2} alt="tarot reader" className="h-auto max-h-full rounded-lg" />
          </div>
        </div>
      </div>
      <div className="mt-10" />
    </div>
  );
};

export default Experience;
