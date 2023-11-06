import React from "react";
import { useNavigate } from "react-router-dom";
interface SloganProps {}

const Slogan: React.FC<SloganProps> = () => {
  const navigate= useNavigate();

  return (
    <div className={`p-10 lg:p-0 md:p-0 flex justify-center items-center h-70`}>
      <div className="text-customColor2 text-center max-w-lg mb-3 lg:mt-20 md:mt-20">
        <h1 className="lg:text-6xl  md:text-5xl text-3xl font-bold mb-3">You deserve an answer!</h1>
        <p className="mb-8 text-lg leading-relaxed">
          Whether you have burning questions about love, career, spirituality, or personal growth,
          our Tarot readings provide the answers you seek.
          <br />
          Each reading is a unique experience, tailored to your specific needs and intentions.
          <br />
          Let the Tarot guide you, offering clarity, empowerment, and a renewed sense of purpose.
          <br />
          Your destiny is within reach.
        </p>
        <button className="leading-none border rounded text-white border-white hover:text-purple-700 hover:bg-white py-2 px-4 rounded-full" onClick={() => {
                      navigate(`/about-me`);
                    }}>
          Find out more
        </button>
      </div>
    </div>
  );
};

export default Slogan;
