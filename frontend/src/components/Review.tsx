import React from "react";

interface ReviewProps {
  review: {
    reviewer: string;
    image: string;
    rating: number;
    content: string;
  };
  rootImageUrl: string;
}

const Review: React.FC<ReviewProps> = ({ review, rootImageUrl}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
        <img src={review.image} alt={review.reviewer} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-medium mb-2 text-center">{review.reviewer}</h3>
      <p className="text-center">{review.content}</p>
      <div className="flex items-center mt-4">
        {Array.from({ length: review.rating }).map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-yellow-500 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0l3.09 8.918h9.878l-7.947 5.785 3.091 8.917-7.946-5.786-7.947 5.786 3.091-8.917-7.947-5.785h9.878z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default Review;
