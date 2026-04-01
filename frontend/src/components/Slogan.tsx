import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TextDBContext } from "./contexts/TextDBContext";
import crystalBall from "../assets/crystalBall.png";

const Slogan: React.FC = () => {
  const navigate = useNavigate();
  const textDB = useContext(TextDBContext);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial glow behind the content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-mystic-purple/30 blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-24 pb-12">
        {/* Floating crystal ball */}
        <div className="flex justify-center mb-8">
          <img
            src={crystalBall}
            alt="Crystal Ball"
            className="w-24 h-24 md:w-32 md:h-32 object-contain animate-float opacity-80"
          />
        </div>

        {/* Main heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-gold leading-tight mb-6">
          {textDB.homepage["slogan-title"]}
        </h1>

        {/* Decorative divider */}
        <div className="divider-gold w-32 mx-auto mb-8" />

        {/* Body text */}
        <p className="text-soft-lavender/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
          {textDB.homepage["slogan-body-1"]}{" "}
          {textDB.homepage["slogan-body-2"]}{" "}
          {textDB.homepage["slogan-body-3"]}{" "}
          {textDB.homepage["slogan-body-4"]}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="btn-primary text-base"
            onClick={() => navigate("/contactForm")}
          >
            {textDB.navigationbar.book}
          </button>
          <button
            className="btn-outline text-base"
            onClick={() => navigate("/about-me")}
          >
            {textDB.homepage["slogan-action"]}
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />
    </section>
  );
};

export default Slogan;
