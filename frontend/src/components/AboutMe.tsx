import React, { useContext } from "react";
import RevealOnScroll from "../HomePage/RevealOnScroll";
import Footer from "./Footer";
import Grandma from "../assets/grandma.jpg";
import TarotIllustration from "../assets/readingImage.png";
import MyAltar from "../assets/myAltar.jpg";
import { TextDBContext } from "./contexts/TextDBContext";
import { Link } from "react-router-dom";

const AboutMe: React.FC = () => {
  const textDB = useContext(TextDBContext);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-4">
              {textDB.aboutme.title}
            </h1>
            <div className="divider-gold w-24 mx-auto" />
          </div>
        </RevealOnScroll>

        <div className="max-w-5xl mx-auto space-y-20">
          {/* Block 1: Image left, text right */}
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-2xl bg-gold/5 blur-xl group-hover:bg-gold/10 transition-all duration-700" />
                <img
                  src={MyAltar}
                  alt="My altar"
                  className="relative w-full h-80 md:h-96 object-cover rounded-2xl shadow-glass"
                />
              </div>
              <div>
                <p className="text-soft-lavender/70 leading-relaxed text-base md:text-lg">
                  {textDB.aboutme["body-1-1"]}
                  <br /><br />
                  {textDB.aboutme["body-1-2"]}
                  <br /><br />
                  {textDB.aboutme["body-1-3"]}
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Block 2: Text left, image right */}
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <p className="text-soft-lavender/70 leading-relaxed text-base md:text-lg">
                  {textDB.aboutme["body-2"]}
                </p>
              </div>
              <div className="relative group order-1 md:order-2">
                <div className="absolute -inset-3 rounded-2xl bg-gold/5 blur-xl group-hover:bg-gold/10 transition-all duration-700" />
                <img
                  src={Grandma}
                  alt="Family heritage"
                  className="relative w-full h-80 md:h-96 object-cover rounded-2xl shadow-glass"
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* Block 3: Image left, text right */}
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-2xl bg-gold/5 blur-xl group-hover:bg-gold/10 transition-all duration-700" />
                <img
                  src={TarotIllustration}
                  alt="Tarot practice"
                  className="relative w-full h-80 md:h-96 object-cover rounded-2xl shadow-glass"
                />
              </div>
              <div>
                <p className="text-soft-lavender/70 leading-relaxed text-base md:text-lg">
                  {textDB.aboutme["body-3"]}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-display text-xl md:text-2xl text-gold/90 leading-relaxed mb-8">
              {textDB.aboutme["action-1"]}
              <br />
              {textDB.aboutme["action-2"]}
            </p>
            <Link to="/contactForm" className="btn-primary text-base">
              {textDB.navigationbar.book}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      <Footer />
    </div>
  );
};

export default AboutMe;
