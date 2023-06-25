import React, { useState, useEffect } from "react";
import Review from "./Review";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);


  useEffect(() => {
    const interval = setInterval(nextReviews, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const nextReviews = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
   
  };

  const prevReviews = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };


  const startIndex = currentPage * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const visibleReviews = reviews.slice(startIndex, endIndex);
  return (
    <div className="flex items-center justify-center mt-[200px] mb-[400px]">
      <div className="w-[900px] h-[400px] bg-customColor1 rounded-lg p-4 shadow-md relative">
        <h1 className="text-customColor2 text-2xl font-semibold mb-[50px] mt-[50px] text-center">Testimonials</h1>
        <p className="text-white text-xl mb-[50px] mt-[50px] text-center">Hear directly from our clients about their tarot reading experiences</p>
        <div className="relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button className="text-gray-100 hover:text-gray-200 flex items-center justify-center w-12 h-12 rounded-full bg-customColor2"  onClick={prevReviews} >
              <FiChevronLeft size={35} />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <button className="text-gray-100 hover:text-gray-200 flex items-center justify-center w-12 h-12 rounded-full bg-customColor2"  onClick={nextReviews}>
              <FiChevronRight size={35} />
            </button>
          </div>
          <div className="flex overflow-x-auto">
            {visibleReviews.map((review, index) => (
              <div key={index} className="p-4 bg-customColor2 rounded-lg shadow-md mx-2">
                <Review review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
