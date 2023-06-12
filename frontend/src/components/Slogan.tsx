import React from "react";

const Slogan = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-white text-center">
        <h1 className="text-7xl font-bold mb-10">You deserve an answer!</h1>
        <p className="mb-8 text-2xl">
          Whether you have burning questions about love, career, spirituality, or personal growth, <br/> our Tarot readings provide the answers you seek. <br/>Each reading is a unique experience, tailored to your specific needs and intentions.
          <br />
          <br />
          Click now to take the first step towards unlocking the mysteries of your path. <br/> Let the Tarot guide you, offering clarity, empowerment, and a renewed sense of purpose. <br/>Embrace the journey and discover the profound insights that await you. <br/>Your destiny is within reach.
        </p>
        <button className="border-white hover:bg-purple-800 text-white font-bold border py-2 px-4 rounded-full">
          Find out more
        </button>
      </div>
    </div>
  );
};

export default Slogan;
