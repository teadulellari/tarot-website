import { FC, useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import theLovers from "../assets/TheLovers1.png";
import theEmpress from "../assets/TheLovers2.png";
import twoOfSwords from "../assets/TheLovers3.png";
import aceOfPnt from "../assets/TheLovers4.png";
import SuggestionCard from "./SuggestionCard"; 
import theMoon from "../assets/TheMoon.png"
import { useNavigate } from "react-router-dom";
import RevealOnScroll from "../HomePage/RevealOnScroll";
import Footer from "./Footer";
import { TextDBContext } from "./contexts/TextDBContext";
interface ServiceProps {
  img: string;
  title: string;
  price: string;
  description: string;
  reasonsToChoose: string[];
}

interface ReadingDetailsParams {
  readingType: string;
  [key: string]: string | undefined;
}

interface ReadingDetailsProps {
  scrollTo: (identifier: string) => void
}

const ReadingDetails: FC<ReadingDetailsProps> = ({scrollTo}) => {
  const readingType = useParams<ReadingDetailsParams>()?.readingType;
  const navigate = useNavigate();
  const location = useLocation();
  const textDB = useContext(TextDBContext); 

  useEffect(() => {
    scrollTo("top")
  }, [location]);

  const readingData: Record<string, ServiceProps> = {
    "love-reading": {
      img: theLovers,
      title: textDB.readingdata["love-reading"].title,
      price: textDB.readingdata["love-reading"].price,
      description:textDB.readingdata["love-reading"].description,
      reasonsToChoose: textDB.readingdata["love-reading"].reasonsToChoose
    },
    "finances-reading": {
      img: theEmpress,
      title: textDB.readingdata["finances-reading"].title,
      price: textDB.readingdata["finances-reading"].price,
      description:textDB.readingdata["finances-reading"].description,
      reasonsToChoose: textDB.readingdata["finances-reading"].reasonsToChoose
    },
    "decision-making-reading": {
      img: twoOfSwords,
      title: textDB.readingdata["decision-making-reading"].title,
      price: textDB.readingdata["decision-making-reading"].price,
      description:textDB.readingdata["decision-making-reading"].description,
      reasonsToChoose: textDB.readingdata["decision-making-reading"].reasonsToChoose
    },
    "spiritual-guidance-reading": {
      img: aceOfPnt,
      title: textDB.readingdata["spiritual-guidance-reading"].title,
      price: textDB.readingdata["spiritual-guidance-reading"].price,
      description:textDB.readingdata["spiritual-guidance-reading"].description,
      reasonsToChoose: textDB.readingdata["spiritual-guidance-reading"].reasonsToChoose
    },
    "short-reading": {
      img: theMoon,
      title: textDB.readingdata["short-reading"].title,
      price: textDB.readingdata["short-reading"].price,
      description:textDB.readingdata["short-reading"].description,
      reasonsToChoose: textDB.readingdata["short-reading"].reasonsToChoose
    }
  };

  const service = readingType ? readingData[readingType] : null;

  if (!service) {
    return <div>{textDB.readingdetails.error}</div>;
  }

  // Define related readings for each reading type
  const relatedReadings: Record<string, string[]> = {
    "love-reading": ["finances-reading", "decision-making-reading", "spiritual-guidance-reading", "short-reading"],
    "finances-reading": ["love-reading", "decision-making-reading", "spiritual-guidance-reading", "short-reading"],
    "decision-making-reading": ["love-reading", "finances-reading", "spiritual-guidance-reading", "short-reading"],
    "spiritual-guidance-reading": ["love-reading", "finances-reading", "decision-making-reading", "short-reading"],
    "short-reading": ["love-reading", "finances-reading", "decision-making-reading", "spiritual-guidance-reading"],

  };

  // Get related readings for the current reading type
  const suggestions = readingType ? relatedReadings[readingType] : [];
  return (
    <div id="details" className="min-h-screen bg-customColor1 grid grid-rows-[auto,1fr,auto,auto] gap-10">
      <section>
      </section>
      <section className="p-10">
      <RevealOnScroll>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="mx-auto w-full md:w-80 h-96 rounded-lg shadow-lg overflow-hidden text-center">
              <img
                src={service.img}
                alt={service.title}
                className="inline-block align-middle w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-center text-2xl md:text-3xl font-semibold text-[#e1be8a]">
                {service.title}
              </h1>
              <p className="text-base md:text-lg font-semibold mt-2 text-customColor1">
                `{textDB.readingdetails.price}: {service.price}`
              </p>

              <div className="mt-6 md:mt-10">
                <h2 className="text-center text-lg md:text-xl font-semibold text-[#e1be8a]">
                {textDB.readingdetails.expect}
                </h2>
                <p className="list-disc pl-6 mt-2 text-base md:text-lg text-customColor2">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 md:mt-10">
                <h2 className="text-lg md:text-xl font-semibold text-[#e1be8a] text-center">
                {textDB.readingdetails.whyus}
                </h2>
                <ul className="list-disc pl-6 mt-2 text-base md:text-lg text-customColor2">
                  {service.reasonsToChoose.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 md:mt-10 text-center">
                <p className="text-base md:text-lg text-[#e1be8a]">
                {textDB.readingdetails.actioncall}
                </p>
                <div className="mt-4">
                  <a
                    href="/contactForm"
                    className="inline-block px-6 py-3 text-customColor1 bg-customColor2 rounded-lg hover:bg-white hover:shadow-lg transition duration-300"
                    onClick={() => {
                      navigate(`/reading/${readingType}/details`);
                    }}
                  >
                    {textDB.readingdetails.actionbutton}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      </section>
      <section className="related-readings mt-40 p-10">
        <RevealOnScroll>
          <div className="container mx-auto">
            <h2 className="text-center text-xl md:text-2xl font-semibold text-[#e1be8a] mb-10">
              {textDB.readingdetails.related}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {suggestions.map((readingType) => (
                <SuggestionCard key={readingType} reading={readingData[readingType]} />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>
      <section className="mt-40">
        <RevealOnScroll>
        <Footer />
        </RevealOnScroll>
      </section>
    </div>
  );
};

export default ReadingDetails;
