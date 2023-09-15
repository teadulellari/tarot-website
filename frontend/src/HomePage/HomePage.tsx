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
//import "./homePage.css";

const HomePage: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  const { reviews } = reviewData;
  const { questions } = faqData;


  useEffect(() => {
    // Define a function to handle the scroll event
    const handleScroll = () => {
      const elementsToAnimate = document.querySelectorAll(".hidden");

      elementsToAnimate.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // If the top of the element is within the viewport, add the 'visible' class
        if (elementTop < windowHeight) {
          element.classList.add("animated");
          element.classList.remove("hidden");
        }
      });
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window]);

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
        <Slider reviews={reviews}/>
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
