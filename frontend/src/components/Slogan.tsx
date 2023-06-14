import React from "react";

interface SloganProps {
  extendedMenuOpen: boolean;
}

const Slogan: React.FC<SloganProps> = ({ extendedMenuOpen }) => {
  return (
    <div className={`flex justify-center items-center h-screen ${extendedMenuOpen ? 'mt-60' : ''}`}>
      <div className="text-white text-center max-w-lg">
        <h1 className="text-6xl font-bold mb-10">You deserve an answer!</h1>
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
        <button className="leading-none border rounded text-white border-white hover:text-purple-700 hover:bg-white py-2 px-4 rounded-full">
          Find out more
        </button>
      </div>
    </div>
  );
};

export default Slogan;
