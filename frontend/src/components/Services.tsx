import React, { useContext } from "react";
import theLovers from "../assets/TheLovers1.png";
import theEmpress from "../assets/TheLovers2.png";
import twoOfSwords from "../assets/TheLovers3.png";
import aceOfPnt from "../assets/TheLovers4.png";
import { Link } from 'react-router-dom';
import { TextDBContext } from "./contexts/TextDBContext";

interface ServiceProps {
  img: string;
  title: string;
  button: string;
  serviceLink: string;
}

const Service: React.FC<ServiceProps> = ({ img, title, button, serviceLink }) => {
  return (
    <div id="services" className="flex flex-col h-full">
      <div className="w-full h-full bg-customColor1 rounded-lg p-4 shadow-md">
        <div className="relative bg-customColor2 rounded-lg overflow-hidden flex-grow h-full flex flex-col">
          <img src={img} alt={title} className="w-full h-auto max-h-[400px]" />
          <div className="p-4 relative z-10 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#7573c1]">
                {title}
              </h3>
            </div>
            <div className="flex justify-center items-end">
              <Link to={serviceLink}>
                <button className="leading-none border rounded text-customColor1 border-[#7573c1] hover:text-yellow-400 hover:bg-[#7573c1] py-2 px-4 rounded-full rounded-md text-sm">
                  {button}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const textDB = useContext(TextDBContext); 

  return (
    <div className="flex justify-center items-center py-8 mx-auto">
      <div className="max-w-[1300px]">
        <div className="text-customColor2 text-center">
          <div className="flex justify-center items-center mb-12">
            <h1 className="text-2xl font-bold mt-8">{textDB.homepage["reading-title"]}</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            <div className="p-8">
              <Service
                img={theLovers}
                title={textDB.homepage["reading-1"]}
                button={textDB.homepage["reading-1-action"]}
                serviceLink="/reading/love-reading/details"
              />
            </div>
            <div className="p-8">
              <Service
                img={theEmpress}
                title={textDB.homepage["reading-2"]}
                button={textDB.homepage["reading-2-action"]}
                serviceLink="reading/general-reading/details"
              />
            </div>
            <div className="p-8">
              <Service
                img={twoOfSwords}
                title={textDB.homepage["reading-3"]}
                button={textDB.homepage["reading-3-action"]}
                serviceLink="reading/decision-making-reading/details"
              />
            </div>
            <div className="p-8">
              <Service
                img={aceOfPnt}
                title={textDB.homepage["reading-4"]}
                button={textDB.homepage["reading-4-action"]}
                serviceLink="reading/spiritual-guidance-reading/details"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
