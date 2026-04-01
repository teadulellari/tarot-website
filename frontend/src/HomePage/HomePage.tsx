import React from "react";
import Slogan from "../components/Slogan";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import RevealOnScroll from "./RevealOnScroll"; 
import PolarReadiness from "../components/PolarReadiness";

const HomePage: React.FC = () => {
  return (  
    <div className="grid grid-rows-[auto,auto,1fr] gap-11">
      <Slogan/>

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
        <Footer />
      </RevealOnScroll>
    </div>
  );
};

export default HomePage;
