import React from "react";
import Slogan from "../components/Slogan";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import FAQ from "../components/FAQ";
import reviewData from "../data/reviewData.json";
import faqData from "../data/faqData.json";
import RevealOnScroll from "./RevealOnScroll"; 

const HomePage: React.FC = () => {
  const { reviews } = reviewData;
  const { questions } = faqData;

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
        <Slider reviews={reviews} />
      </RevealOnScroll>

      <RevealOnScroll>
        <FAQ questions={questions} />
      </RevealOnScroll>

      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </div>
  );
};

export default HomePage;
