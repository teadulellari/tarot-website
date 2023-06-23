import React from "react";
import pic1 from "../assets/tarotReading1.png";
import pic2 from "../assets/tarotReading2.png";
import moon from "../assets/moon.png";

const Experience = () => {
  return (
    <div className="px-8 py-20">
      <div className="text-white text-center">
        <h1 className="text-3xl font-bold mb-12">Our Expertise</h1>
      </div>
      <div className="grid grid-cols-2 gap-12 justify-center">
        <div className="flex flex-col items-center justify-center gap-20">
          <div className="w-full h-[60%] relative">
            <div className="moon-circle"></div>
            <img src={pic1} alt="tarot reader" className="h-auto max-h-full" />
          </div>
          <div className="w-full h-[40%] relative">
            <div className="moon-circle"></div>
            <img src={moon} alt="moon" className="h-auto max-h-full" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-20">
          <div className="w-full h-[40%] relative">
            <div className="moon-circle"></div>
            <img src={moon} alt="moon" className="h-auto max-h-full" />
          </div>
          <div className="w-full h-[60%] relative">
            <div className="moon-circle"></div>
            <img src={pic2} alt="tarot reader" className="h-auto max-h-full" />
          </div>
        </div>
      </div>
      <div className="mt-10" /> 
    </div>
  );
};

export default Experience;
