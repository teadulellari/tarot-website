import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TextDBContext } from "./contexts/TextDBContext";
interface SloganProps {}

const Slogan: React.FC<SloganProps> = () => {
  const navigate= useNavigate();
  const textDB = useContext(TextDBContext); 

  return (
    <div className={`p-10 lg:p-0 md:p-0 flex justify-center items-center h-70`}>
      <div className="text-customColor2 text-center max-w-lg mb-3 lg:mt-20 md:mt-20">
        <h1 className="lg:text-6xl  md:text-5xl text-3xl font-bold mb-3">{textDB.homepage["slogan-title"]}</h1>
        <p className="mb-8 text-lg leading-relaxed">
          {textDB.homepage["slogan-body-1"]}
          <br />
          {textDB.homepage["slogan-body-2"]}
          <br />
          {textDB.homepage["slogan-body-3"]}
          <br />
          {textDB.homepage["slogan-body-4"]}
        </p>
        <button className="leading-none border rounded text-white border-white hover:text-purple-700 hover:bg-white py-2 px-4 rounded-full" onClick={() => {
                      navigate(`/about-me`);
                    }}>
          {textDB.homepage["slogan-action"]}
        </button>
      </div>
    </div>
  );
};

export default Slogan;
