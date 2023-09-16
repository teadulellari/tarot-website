import React, { useState, useEffect } from "react";
import Slogan from "../components/Slogan";
import Services from "../components/Services";
import NavigationBar from "../components/NavigationBar";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import FAQ from "../components/FAQ";
import reviewData from "../data/reviewData.json";
import faqData from "../data/faqData.json";
import "./homePage.css";

const HomePage: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  const { reviews } = reviewData;
  const { questions } = faqData;

  useEffect(() => {
    const handleScroll = () => {
      console.log(1)
      const elementsToAnimate = document.querySelectorAll(".hidden");
      console.log(2)
      elementsToAnimate.forEach((element) => {
        console.log(3)
        const elementTop = element.getBoundingClientRect().top;
        console.log(elementTop)
        const windowHeight = window.innerHeight;
        console.log(windowHeight)

        if (elementTop < windowHeight) {
          element.classList.add("animated");
          element.classList.remove("hidden");
        } else {
          // If the element has scrolled out of the viewport, add the "hidden-scroll" class
          element.classList.add("hidden-scroll");
          element.classList.remove("animated");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid grid-rows-[auto,auto,1fr] gap-11">
      <NavigationBar navbar={navbar} setNavbar={setNavbar} />
      <Slogan extendedMenuOpen={navbar} />
      <div className="animated">
        <Services />
      </div>
      <div className="animated">
        <Experience />
      </div>
      <div className="animated">
        <Slider reviews={reviews} />
      </div>
      <div className="animated">
        <FAQ questions={questions} />
      </div>
      <div className="animated">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
