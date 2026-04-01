import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface QuestionProps {
  question: {
    q: string;
    a: string;
  };
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
        showAnswer ? "ring-1 ring-gold/20" : ""
      }`}
    >
      <button
        className="flex items-center justify-between w-full px-6 py-4 text-left"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <h3 className="text-soft-lavender font-medium pr-4">{question.q}</h3>
        <span className="shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
          {showAnswer ? (
            <FaMinus className="w-3 h-3 text-gold" />
          ) : (
            <FaPlus className="w-3 h-3 text-gold" />
          )}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          showAnswer ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5">
          <div className="divider-gold mb-3" />
          <p className="text-soft-lavender/60 text-sm leading-relaxed">
            {question.a}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
