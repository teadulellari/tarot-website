import React, { useEffect } from "react";
import Alpine from "alpinejs";
import hands from '../assets/hands1.png';
import feather from '../assets/feather1.png';
import wand from '../assets/wand1.png';


const Experience = () => {
  useEffect(() => {
    // Initialize Alpine.js when the component mounts
    Alpine.start();
  }, []);

  return (
    <div className=" mt-20 px-8 py-20 bg-customColor1">
      <div className="text-customColor2 text-center">
        <h1 className="text-3xl font-bold mb-12">Our Expertise</h1>
      </div>
      <div className="antialiased h-250px flex justify-evenly space-x-16 items-center text-center text-customColor2">
        <div className="w-48 flex flex-col items-center"> 
        <img src={hands} alt="hands" className="w-[50px] h-[50px]"/> 
          <div x-data="{ counter: 0, finalCount: 20000 }">
            <span
              x-text="counter + '+'"
              x-init="() => { setInterval(() => { counter < finalCount ? counter += 100 : clearInterval(this) }, 10) }"
              className="text-4xl font-bold text-customColor2"
            >
            </span>
          </div>
          <p>Satisfied clients</p>
        </div>
        <div className="w-48 flex flex-col items-center"> 
        <img src={feather} alt="feather" className="w-[100px] h-[100px]" /> 
          <div x-data="{ counter: 0, finalCount: 97 }">
            <span
              x-text="counter + '%'"
              x-init="() => { setInterval(() => { counter < finalCount ? counter++ : clearInterval(this) }, 10) }"
              className="text-4xl font-bold text-customColor2"
            >
            </span>
          </div>
          <p>of clients booked a second reading</p>
        </div>
        <div className="w-48 flex flex-col items-center"> {/* Flex container for the third counter */}
        <img src={wand} alt="wand" className="w-[100px] h-[100px]" /> {/* Add the crescent moon icon */}
          <div x-data="{ counter: 0, finalCount: 10 }">
            <span
              x-text="counter + '+'"
              x-init="() => { setInterval(() => { counter < finalCount ? counter++ : clearInterval(this) }, 10) }"
              className="text-4xl font-bold text-customColor2"
            >
            </span>
          </div>
          <p>Years of providing guidance</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
