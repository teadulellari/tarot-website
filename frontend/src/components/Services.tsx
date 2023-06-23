import React from "react";
import theLovers from "../assets/The Lovers (1).png";
import theEmpress from "../assets/The Lovers (2).png";
import twoOfSwords from "../assets/The Lovers (3).png";
import aceOfPnt from "../assets/The Lovers (4).png";

interface ServiceProps {
  img: string;
  title: string;
  button: string;
}

const Service: React.FC<ServiceProps> = ({
  img,
  title,
  button,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative bg-[#cac8ed] rounded-lg overflow-hidden flex-grow">
        <img src={img} alt={title} className="w-full h-auto max-h-[400px]" />
        <div className="p-4 relative z-10">
          <h3 className="text-lg font-semibold mb-2 text-[#7573c1]">{title}</h3>
          <button className="leading-none border rounded text-customColor1 border-[#7573c1] hover:text-yellow-400 hover:bg-[#7573c1] py-2 px-4 rounded-full rounded-md text-sm">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="max-w-[1300px]">
        <div className="text-white text-center">
          <h1 className="text-3xl font-bold mb-12 mt-8">Our Readings!</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            <div className="p-8">
              <Service
                img={theLovers}
                title="Love Reading"
                button="Learn More"
              />
            </div>
            <div className="p-8">
              <Service
                img={theEmpress}
                title="General Reading"
                button="Learn More"
              />
            </div>
            <div className="p-8">
              <Service
                img={twoOfSwords}
                title="Decision Making Reading"
                button="Learn More"
              />
            </div>
            <div className="p-8">
              <Service
                img={aceOfPnt}
                title="Spritiual Guidance reading"
                button="Learn More"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
