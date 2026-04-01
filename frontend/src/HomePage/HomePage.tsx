import React, { useContext } from "react";
import Slogan from "../components/Slogan";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import RevealOnScroll from "./RevealOnScroll";
import PolarReadiness from "../components/PolarReadiness";
import Slider from "../components/Slider";
import Faq from "../components/FAQ";
import { TextDBContext } from "../components/contexts/TextDBContext";

const HomePage: React.FC = () => {
  const textDB = useContext(TextDBContext);

  return (
    <div className="flex flex-col">
      <Slogan />

      <RevealOnScroll>
        <Services />
      </RevealOnScroll>

      <RevealOnScroll>
        <Experience />
      </RevealOnScroll>

      <RevealOnScroll>
        <PolarReadiness />
      </RevealOnScroll>

      <RevealOnScroll>
        <Slider reviews={textDB.reviews} />
      </RevealOnScroll>

      <RevealOnScroll>
        <Faq questions={textDB.faq.questions} />
      </RevealOnScroll>

      <Footer />
    </div>
  );
};

export default HomePage;
