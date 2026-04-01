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
    <Link
      to={`/reading/${reading.title.toLowerCase().replace(/ /g, "-")}/details`}
      className="group block"
    >
      <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img
            src={reading.img}
            alt={reading.title}
            className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-display text-sm font-semibold text-soft-lavender mb-1">
            {reading.title}
          </h3>
          <span className="text-xs text-gold/70">{reading.price}</span>
          <span className="mt-3 text-xs text-soft-lavender/50 group-hover:text-gold transition-colors">
            Learn More &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SuggestionCard;
