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
    <div className="mt-20 px-8 py-20 bg-customColor1">
      <div className="text-customColor2 text-center">
        <h1 className="text-3xl font-bold mb-12">Our Expertise</h1>
      </div>
      <div className="antialiased flex flex-col md:flex-row items-center justify-center text-center text-customColor2">
        {/* Item 1 */}
        <div className="w-48 mb-8 md:mb-0"> 
          <img src={hands} alt="hands" className="w-[50px] h-[50px] mx-auto" />
          <div
            x-data="{ counter: 0, finalCount: 20000 }"
            className="text-4xl font-bold text-customColor2"
          >
            <span x-text="counter + '+'"></span>
            <span
              x-init="() => { setInterval(() => { counter < finalCount ? counter += 100 : clearInterval(this) }, 10) }"
            ></span>
          </div>
          <p>Satisfied clients</p>
        </div>
        {/* Item 2 */}
        <div className="w-48 mb-8 md:mb-0">
          <img src={feather} alt="feather" className="w-[100px] h-[100px] mx-auto" />
          <div
            x-data="{ counter: 0, finalCount: 97 }"
            className="text-4xl font-bold text-customColor2"
          >
            <span x-text="counter + '%'"></span>
            <span
              x-init="() => { setInterval(() => { counter < finalCount ? counter++ : clearInterval(this) }, 10) }"
            ></span>
          </div>
          <p>of clients booked a second reading</p>
        </div>
        {/* Item 3 */}
        <div className="w-48">
          <img src={wand} alt="wand" className="w-[100px] h-[100px] mx-auto" />
          <div
            x-data="{ counter: 0, finalCount: 10 }"
            className="text-4xl font-bold text-customColor2"
          >
            <span x-text="counter + '+'"></span>
            <span
              x-init="() => { setInterval(() => { counter < finalCount ? counter++ : clearInterval(this) }, 10) }"
            ></span>
          </div>
          <p>Years of providing guidance</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
