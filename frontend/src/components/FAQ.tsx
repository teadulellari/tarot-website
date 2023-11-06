import React, { useContext } from "react";
import { TextDBContext } from "./contexts/TextDBContext";
import Question from "./Question";

interface FaqData {
  q: string;
  a: string;
}

interface QuestionProps {
  questions: FaqData[];
}

const Faq: React.FC<QuestionProps> = ({ questions }) => {
  const textDB = useContext(TextDBContext); 

  return (
    <div className="container px-4 py-8 mx-auto mt-30 mb-40 max-w-[1000px] bg-customColor1">
      <div>
        <h1 className="text-customColor2 text-xl font-semibold mb-4 mt-4 text-center">
          {textDB.homepage["faq-title"]}
        </h1>
      </div>
      <div className="mt-4 space-y-4 lg:mt-6">
        {questions.map((question, index) => (
          <div
            key={index}
            className="p-2 bg-customColor2 rounded-lg shadow-md mx-2"
          >
            <Question question={question} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
