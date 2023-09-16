import React, { useState, useEffect } from "react";
import Review from "./Review";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ReviewData {
  reviewer: string;
  image: string;
  rating: number;
  content: string;
}

interface SliderProps {
  reviews: ReviewData[]; 
}

const Slider: React.FC<SliderProps> = ({ reviews }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(3); // Default number of reviews per page
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  useEffect(() => {
    const interval = setInterval(nextReviews, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const nextReviews = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const prevReviews = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const startIndex = currentPage * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const visibleReviews = reviews.slice(startIndex, endIndex);

  // Set the number of reviews to show on mobile screens
  const mobileReviewsPerPage = 1;

  // Determine the number of reviews to display based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setReviewsPerPage(mobileReviewsPerPage);
      } else {
        setReviewsPerPage(3); // Set the default number of reviews for larger screens
      }
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Initial call to set the correct number of reviews based on the screen size
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-[200px] mb-[150px] max-w-[1000px] mx-auto">
      <div className="bg-customColor1 rounded-lg p-4 shadow-md relative">
        <h1 className="text-customColor2 text-2xl font-semibold mb-[50px] mt-[50px] text-center">
          Testimonials
        </h1>
        <p className="text-white text-xl mb-[50px] mt-[50px] text-center">
          Hear directly from our clients about their tarot reading experiences
        </p>
        <div className="relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button
              className="text-gray-100 hover:text-gray-200 flex items-center justify-center  rounded-full bg-customColor2"
              onClick={prevReviews}
            >
              <FiChevronLeft size={35} />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <button
              className="text-gray-100 hover:text-gray-200 flex items-center justify-center  rounded-full bg-customColor2"
              onClick={nextReviews}
            >
              <FiChevronRight size={35} />
            </button>
          </div>
          <div className={`flex overflow-x-auto ${reviewsPerPage === 1 ? "flex-col" : ""}`}>
            {visibleReviews.map((review, index) => (
              <div
                key={index}
                className={`p-4 bg-customColor2 rounded-lg shadow-md mx-2 ${
                  reviewsPerPage === mobileReviewsPerPage ? "mb-4" : ""
                }`}
              >
                <Review review={review}  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
