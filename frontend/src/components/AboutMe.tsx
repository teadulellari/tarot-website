import React, { useContext } from "react";
import RevealOnScroll from "../HomePage/RevealOnScroll";
import Footer from "./Footer";
import Grandma from "../assets/grandma.jpg";
import Me from "../assets/aboutMe.jpeg";
import TarotIllustration from "../assets/readingImage.png";
import MyAltar from "../assets/myAltar.jpg";
import { TextDBContext } from "./contexts/TextDBContext";
import { Link } from "react-router-dom";


const AboutMe: React.FC = () => {
  const textDB = useContext(TextDBContext);

  return (
    <div id="about" className="min-h-screen bg-customColor1">
      <div className="container mx-auto pt-10">
        <RevealOnScroll>
          <h2 className="text-center text-xl md:text-3xl font-semibold text-[#e1be8a]">
            {textDB.aboutme.title}
          </h2>
          <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-20 lg:gap-20 text-base md:text-lg mt-10 p-6 md:p-10 lg:p-12 text-customColor2 justify-center">
            <div>
              <img
                src={MyAltar}
                alt={"tarot"}
                className="inline-block align-middle w-96 h-96 object-cover rounded-lg"
              />
            </div>
            <p>
              {textDB.aboutme["body-1-1"]}
              <br></br> {textDB.aboutme["body-1-2"]} <br></br>
              {textDB.aboutme["body-1-3"]}
            </p>
            <p>{textDB.aboutme["body-2"]}</p>

            <div>
              <img
                src={Grandma}
                alt={"tarot"}
                className="inline-block align-middle w-96 h-96 object-cover rounded-lg "
              />
            </div>

            <div>
              <img
                src={TarotIllustration}
                alt={"tarot"}
                className="inline-block align-middle w-96 h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <p>{textDB.aboutme["body-3"]}</p>
            </div>
          </section>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="text-center  mx-auto w-[90%] md:w-[70%]  lg:w-[80%] text-base text-lg md:text-2xl mt-10 p-6 md:p-10 lg:p-12 text-[#e1be8a] mb-20">
            <p>
              {textDB.aboutme["action-1"]}
              <br></br>
              {textDB.aboutme["action-2"]}
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/contactForm"
              className="inline-block px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4 lg:mt-0"
            >
              {textDB.navigationbar.book}
            </Link>
          </div>
        </RevealOnScroll>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
