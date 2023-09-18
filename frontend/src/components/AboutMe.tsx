import React, { useState } from "react";
import RevealOnScroll from "../HomePage/RevealOnScroll";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import Grandma from "../assets/grandma.jpg";
import Me from "../assets/aboutMe.jpeg";
import TarotIllustration from "../assets/readingImage.png"


const AboutMe: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  if (navbar) {
    return (
      <div className="bg-customColor1 h-full border-none">
        <NavigationBar navbar={navbar} setNavbar={setNavbar} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-customColor1">
      <NavigationBar navbar={navbar} setNavbar={setNavbar} />
      <div className="container mx-auto mt-10">
        <RevealOnScroll>
          <h2 className="text-center text-xl md:text-3xl font-semibold text-[#e1be8a]">
            About Me
          </h2>
          <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-20 lg:gap-20 text-base md:text-lg mt-10 p-6 md:p-10 lg:p-12 text-customColor2 justify-center">
            <div>
              <img
                src={Me}
                alt={"tarot"}
                className="inline-block align-middle w-96 h-96 object-cover rounded-lg"
              />
            </div>
            <p>
              Welcome to my world of tarot!<br></br> I prefer to be called Tea Leaf, and
              I invite you to join me on a journey that spans generations and is
              steeped in ancient wisdom. <br></br>My connection to tarot readings began
              long before I could even pronounce the word "tarot." As a child, I
              was fascinated by the mystical and magical aura that surrounded my
              family's gatherings. It was during these gatherings that I would
              witness my grandmother, a revered and gifted medium, delve into
              the depths of the cards to unveil secrets of the past, insights
              into the present, and glimpses into the future.
            </p>
            <p>
              My grandmother's tarot sessions were like windows to the soul. I
              would sit at her feet, wide-eyed and curious, as she shuffled the
              cards with a grace that can only come from years of practice. Her
              hands, weathered by time, held the keys to unlocking the mysteries
              of the universe. She taught me that tarot was not just about the
              cards; it was a sacred connection to the divine, a way to
              understand the intricate dance between destiny and free will.
              As I grew older, my fascination with tarot readings deepened. I
              voraciously studied the symbolism, the archetypes, and the
              esoteric meanings hidden within each card. I sought guidance from
              my grandmother, who lovingly nurtured my budding talent and
              instilled in me the belief that intuition and empathy were the
              keys to unlocking the true power of the tarot.
            </p>

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
            <p>
            The years passed, and my journey led me to explore spirituality,
              meditation, and the interconnectedness of all things. My family's
              generational connection to tarot readings became a profound part
              of my identity, and I realized that I was not just continuing a
              tradition; I was embarking on a spiritual awakening.
              Today, I am honored to share my gifts with you. My mission is to
              provide you with genuine and insightful tarot readings that
              empower you to make positive changes in your life. Each reading is
              a personalized experience, carefully crafted to address your
              unique questions and concerns. I invite you to explore the world
              of tarot with me, to uncover the mysteries of your own journey,
              and to embrace the magic that tarot can bring into your life.
            </p>
          
            <div>
            </div>
          </section>
        </RevealOnScroll>
        <RevealOnScroll>
        <div className="text-center  mx-auto w-[90%] md:w-[70%]  lg:w-[70%] text-base text-lg md:text-2xl mt-10 p-6 md:p-10 lg:p-12 text-[#e1be8a] mb-20">
          <p>
              And remember, I won't just be a stranger interpreting cards for
              you. I am open to being your friend and spiritual companion on
              this incredible journey of self-discovery. <br></br>If you ever feel the
              need to connect, discuss, or simply share your thoughts, know that
              I am here for you.
            </p>
          </div>
        </RevealOnScroll>
    
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
