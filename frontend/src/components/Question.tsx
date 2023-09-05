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

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="bg-customColor2">
      <div className="text-l md:text-xl  lg:text-xl font-medium mb-2 text-center">
        <button className="flex items-center justify-between w-full" onClick={handleClick}>
          <h5 className="mx-auto">{question.q}</h5>

          {showAnswer ? (
            <FaMinus className="w-6 h-6 self-start" />
          ) : (
            <FaPlus className="w-6 h-6 self-start" />
          )}
        </button>
      </div>

      {showAnswer && (
        <div className="text-ml font-medium mb-2 text-center">
          <p>{question.a}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
