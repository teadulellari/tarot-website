import React, { useState } from "react";
import Slogan from "../components/Slogan";
import Services from "../components/Services";
import NavigationBar from "../components/NavigationBar";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import FAQ from '../components/FAQ';
import reviewData from "../data/reviewData.json"; 
import faqData from "../data/faqData.json";

const HomePage: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  const { reviews } = reviewData; 
  const { questions } = faqData;
  const rootImageUrl = "/assets/reviewerImg"; 

  return (
    <div className="grid grid-rows-[auto,auto,1fr] gap-11">
      <NavigationBar navbar={navbar} setNavbar={setNavbar} />
      <Slogan extendedMenuOpen={navbar} />
      <Services />
      <Experience />
      <Slider reviews={reviews} rootImageUrl={rootImageUrl} />
      <FAQ questions={questions} />
      <Footer />
    </div>
  );
};

export default HomePage;
