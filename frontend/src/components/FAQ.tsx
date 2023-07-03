import React from "react";
import Question from "./Question";

interface FaqData {
  q: string;
  a: string;
}

interface QuestionProps {
  questions: FaqData[];
}

const Faq: React.FC<QuestionProps> = ({ questions }) => {

  return (
    <div className="container px-6 py-12 mx-auto bg-customColor1">
      <div >
        <div>
        <h1 className="text-customColor2 text-2xl font-semibold mb-[50px] mt-[50px] text-center">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        </div>
      </div>
      <div className="mt-8 space-y-8 lg:mt-12">
            {questions.map((question, index) => (
              <div
                key={index}
                className="p-4 bg-customColor2 rounded-lg shadow-md mx-2"
              >
                <Question question={question} />
              </div>
            ))}
          </div>
    </div>
  );
};
export default Faq;
