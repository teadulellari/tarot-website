import React, { useContext } from "react";
import theLovers from "../assets/TheLovers1.png";
import theEmpress from "../assets/TheLovers2.png";
import twoOfSwords from "../assets/TheLovers3.png";
import aceOfPnt from "../assets/TheLovers4.png";
import theMoon from "../assets/TheMoon.png";
import { Link } from "react-router-dom";
import { TextDBContext } from "./contexts/TextDBContext";

interface ServiceProps {
  img: string;
  title: string;
  button: string;
  serviceLink: string;
}

const Service: React.FC<ServiceProps> = ({ img, title, button, serviceLink }) => {
  return (
    <Link to={serviceLink} className="group block">
      <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
        {/* Card image */}
        <div className="relative overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
        </div>

        {/* Card content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-display text-lg font-semibold text-gold mb-3">
            {title}
          </h3>
          <div className="mt-auto">
            <span className="inline-flex items-center text-sm text-soft-lavender/70 group-hover:text-gold transition-colors duration-300">
              {button}
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Services = () => {
  const textDB = useContext(TextDBContext);

  return (
    <section id="services" className="section-padding max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
          {textDB.homepage["reading-title"]}
        </h2>
        <div className="divider-gold w-24 mx-auto mb-4" />
        <p className="text-soft-lavender/60 max-w-xl mx-auto">
          Discover the guidance you seek through our curated tarot experiences
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <Service
          img={theMoon}
          title={textDB.homepage["reading-5"]}
          button={textDB.homepage["reading-5-action"]}
          serviceLink="/reading/short-reading/details"
        />
        <Service
          img={theLovers}
          title={textDB.homepage["reading-1"]}
          button={textDB.homepage["reading-1-action"]}
          serviceLink="/reading/love-reading/details"
        />
        <Service
          img={theEmpress}
          title={textDB.homepage["reading-2"]}
          button={textDB.homepage["reading-2-action"]}
          serviceLink="/reading/finances-reading/details"
        />
        <Service
          img={twoOfSwords}
          title={textDB.homepage["reading-3"]}
          button={textDB.homepage["reading-3-action"]}
          serviceLink="/reading/decision-making-reading/details"
        />
        <Service
          img={aceOfPnt}
          title={textDB.homepage["reading-4"]}
          button={textDB.homepage["reading-4-action"]}
          serviceLink="/reading/spiritual-guidance-reading/details"
        />
      </div>
    </section>
  );
};

export default Services;
