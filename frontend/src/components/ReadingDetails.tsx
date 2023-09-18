import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import theLovers from "../assets/TheLovers1.png";
import theEmpress from "../assets/TheLovers2.png";
import twoOfSwords from "../assets/TheLovers3.png";
import aceOfPnt from "../assets/TheLovers4.png";
import SuggestionCard from "./SuggestionCard"; // Import the SuggestionCard component
import { useNavigate } from "react-router-dom";
import RevealOnScroll from "../HomePage/RevealOnScroll";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
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

const ReadingDetails: FC = () => {
  const readingType = useParams<ReadingDetailsParams>()?.readingType;
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);

  const readingData: Record<string, ServiceProps> = {
    "love-reading": {
      img: theLovers,
      title: "Love Reading",
      price: "$XX",
      description:
        "Tea Tarot, with years of experience, will carefully analyze the current energies surrounding your love life, providing honest insights into potential opportunities, challenges, and the overall direction of your romantic path. We value your time and aim to provide you with your detailed love reading within 5-7 business days. This allows Tea Tarot to give your questions the attention they deserve for a thoughtful response. If you have questions or need further clarification after receiving your love reading, Tea Tarot is available for follow-up discussions to help you navigate your unique situation.",
      reasonsToChoose: [
        "Experience: Tea Tarot approaches each reading with years of experience, ensuring a deep and insightful analysis of your love life.",
        "Confidentiality: Your privacy is paramount. Your readings are strictly confidential, and we take every precaution to protect your personal information.",
        "Personalized Guidance: Your love reading is customized to address your specific concerns and questions, offering practical advice tailored to your circumstances.",
      ],
    },
    "general-reading": {
      img: theEmpress,
      title: "General Reading",
      price: "$XX",
      description:
        "Tea Leaf Tarot, with years of experience, will carefully analyze the current energies surrounding your life, providing insights into various aspects of your life's journey. We value your time and aim to provide you with your detailed general reading within 5-7 business days. This ensures that you receive a thorough and meaningful reading. If you have questions or need further clarification after receiving your general reading, Tea Tarot is available for follow-up discussions to help you navigate your unique situation.",
      reasonsToChoose: [
        "Experience: Tea Tarot approaches each reading with years of experience, ensuring a deep and insightful analysis of your life's journey.",
        "Confidentiality: Your privacy is paramount. Your readings are strictly confidential, and we take every precaution to protect your personal information.",
        "Personalized Guidance: Your general reading is customized to address your specific concerns and questions, offering practical advice tailored to your circumstances.",
      ],
    },
    "decision-making-reading": {
      img: twoOfSwords,
      title: "Decision Making Reading",
      price: "$XX",
      description:
        "Tea Tarot, with years of experience, will carefully analyze the current energies surrounding your decisions, providing honest insights to guide you through your decision-making process. We value your time and aim to provide you with your detailed decision-making reading within 5-7 business days. This allows you to receive timely insights into your decision-making process. If you have questions or need further clarification after receiving your decision-making reading, Tea Tarot is available for follow-up discussions to help you navigate your unique situation.",
      reasonsToChoose: [
        "Experience: Tea Tarot approaches each reading with years of experience, ensuring a deep and insightful analysis of your decision-making process.",
        "Confidentiality: Your privacy is paramount. Your readings are strictly confidential, and we take every precaution to protect your personal information.",
        "Personalized Guidance: Your decision-making reading is customized to address your specific concerns and questions, offering practical advice tailored to your circumstances.",
      ],
    },
    "spiritual-guidance-reading": {
      img: aceOfPnt,
      title: "Spiritual Guidance Reading",
      price: "$XX",
      description:
        "Tea Tarot, with years of experience, will carefully analyze the current energies surrounding your spiritual path, providing guidance to help you on your spiritual journey. We value your time and aim to provide you with your detailed spiritual guidance reading within 5-7 business days. This allows you to receive timely insights into your spiritual path. If you have questions or need further clarification after receiving your spiritual guidance reading, Tea Tarot is available for follow-up discussions to help you navigate your unique situation.",
      reasonsToChoose: [
        "Experience: Tea Tarot approaches each reading with years of experience, ensuring a deep and insightful analysis of your spiritual path.",
        "Confidentiality: Your privacy is paramount. Your readings are strictly confidential, and we take every precaution to protect your personal information.",
        "Personalized Guidance: Your spiritual guidance reading is customized to address your specific concerns and questions, offering practical advice tailored to your circumstances.",
      ],
    },
  };

  const service = readingType ? readingData[readingType] : null;

  if (!service) {
    return <div>Reading not found.</div>;
  }

  // Define related readings for each reading type
  const relatedReadings: Record<string, string[]> = {
    "love-reading": ["general-reading", "decision-making-reading", "spiritual-guidance-reading"],
    "general-reading": ["love-reading", "decision-making-reading", "spiritual-guidance-reading"],
    "decision-making-reading": ["love-reading", "general-reading", "spiritual-guidance-reading"],
    "spiritual-guidance-reading": ["love-reading", "general-reading", "decision-making-reading"],
  };

  // Get related readings for the current reading type
  const suggestions = readingType ? relatedReadings[readingType] : [];
 if(navbar ){
  return(
    <div className="bg-customColor1 h-full border-none">
    <NavigationBar navbar={navbar} setNavbar={setNavbar} />
    </div>
  )
 }
  return (
    <div className="min-h-screen bg-customColor1 grid grid-rows-[auto,1fr,auto,auto] gap-10">
      <section>
        <NavigationBar navbar={navbar} setNavbar={setNavbar} />
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
                Price: {service.price}
              </p>

              <div className="mt-6 md:mt-10">
                <h2 className="text-center text-lg md:text-xl font-semibold text-[#e1be8a]">
                  What to Expect
                </h2>
                <p className="list-disc pl-6 mt-2 text-base md:text-lg text-customColor2">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 md:mt-10">
                <h2 className="text-lg md:text-xl font-semibold text-[#e1be8a] text-center">
                  Why Choose Tea Leaf Tarot?
                </h2>
                <ul className="list-disc pl-6 mt-2 text-base md:text-lg text-customColor2">
                  {service.reasonsToChoose.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 md:mt-10 text-center">
                <p className="text-base md:text-lg text-[#e1be8a]">
                  If you're ready, book a reading in Calendly.
                </p>
                <div className="mt-4">
                  <a
                    href="https://calendly.com/teadulellari/tarot-reading"
                    className="inline-block px-6 py-3 text-customColor1 bg-customColor2 rounded-lg hover:bg-white hover:shadow-lg transition duration-300"
                    onClick={() => {
                      navigate(`/reading/${readingType}/details`);
                    }}
                  >
                    Book a Reading
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
              Related Readings
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
