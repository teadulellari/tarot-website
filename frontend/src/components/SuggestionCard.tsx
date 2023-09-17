import React from "react";
import { Link } from "react-router-dom";

interface ServiceProps {
  img: string;
  title: string;
  price: string;
}

interface SuggestionCardProps {
  reading: ServiceProps;
}
const SuggestionCard: React.FC<SuggestionCardProps> = ({ reading }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-customColor2 p-4 rounded-lg shadow-lg w-auto">
      <img src={reading.img} alt={reading.title} className="w-[30%] h-[70%] object-cover rounded-lg" />
      <h3 className="text-lg font-semibold mt-4 text-customColor1">{reading.title}</h3>
      <p className="text-sm mt-1 text-customColor1">{reading.price}</p>
      <Link to={`/reading/${reading.title.toLowerCase().replace(/ /g, '-')}/details`} className="mt-4 inline-block text-indigo-600 hover:underline">
        Learn More
      </Link>
    </div>
  );
};

export default SuggestionCard;
