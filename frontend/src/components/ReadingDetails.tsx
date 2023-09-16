// src/components/ReadingDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";
import theLovers from "../assets/TheLovers1.png";
import theEmpress from "../assets/TheLovers2.png";
import twoOfSwords from "../assets/TheLovers3.png";
import aceOfPnt from "../assets/TheLovers4.png";

interface ServiceProps {
  img: string;
  title: string;
  price: string;
  description: string;
  reasonsToChoose: string[];
}

const ReadingDetails: React.FC = () => {
  const { readingType } = useParams<{ readingType: string }>();

  const readingData: { [key: string]: ServiceProps } = {
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

  return (
    <div className="min-h-screen bg-customColor1 p-8">
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
            <h1 className="text-2xl md:text-3xl font-semibold text-[#e1be8a]">
              {service.title}
            </h1>
            <p className="text-base md:text-lg font-semibold mt-2 text-customColor1">
              Price: {service.price}
            </p>

            <div className="mt-6 md:mt-10">
              <h2 className="text-center text-lg md:text-xl font-semibold text-[#e1be8a]">
                What to Expect
              </h2>
              <p className=" list-disc pl-6 mt-2 text-base md:text-lg text-customColor2">
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
                  className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 hover:shadow-lg transition duration-300"
                >
                  Book a Reading
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingDetails;
