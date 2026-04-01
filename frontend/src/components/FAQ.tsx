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
    <section className="section-padding max-w-3xl mx-auto bg-midnight/70 backdrop-blur-sm rounded-3xl">
      <div className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
          {textDB.homepage["faq-title"]}
        </h2>
        <div className="divider-gold w-24 mx-auto" />
      </div>

      <div className="space-y-3">
        {questions.map((question, index) => (
          <Question key={index} question={question} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
