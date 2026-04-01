import React from "react";

interface ReviewProps {
  review: {
    reviewer: string;
    image: string;
    rating: number;
    content: string;
  };
}

const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="glass-card rounded-2xl p-6 h-full flex flex-col">
      {/* Stars at top */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < review.rating ? "text-gold" : "text-soft-lavender/20"
            } fill-current`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0l3.09 8.918h9.878l-7.947 5.785 3.091 8.917-7.946-5.786-7.947 5.786 3.091-8.917-7.947-5.785h9.878z" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p className="text-soft-lavender/70 text-sm leading-relaxed flex-grow mb-5 italic">
        "{review.content}"
      </p>

      {/* Reviewer info */}
      <div className="flex items-center gap-3 pt-4 border-t border-soft-lavender/10">
        <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-gold/20 shrink-0">
          <img
            src={review.image}
            alt={review.reviewer}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-sm font-medium text-soft-lavender">
          {review.reviewer}
        </span>
      </div>
    </div>
  );
};

export default Review;
