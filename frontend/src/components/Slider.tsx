import React, { useState, useEffect, useContext, useCallback } from "react";
import Review from "./Review";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TextDBContext } from "./contexts/TextDBContext";

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
  const [reviewsPerPage, setReviewsPerPage] = useState(3);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const textDB = useContext(TextDBContext);

  const nextReviews = useCallback(() => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  useEffect(() => {
    const interval = setInterval(nextReviews, 7000);
    return () => clearInterval(interval);
  }, [nextReviews]);

  const prevReviews = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  useEffect(() => {
    const handleResize = () => {
      setReviewsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startIndex = currentPage * reviewsPerPage;
  const visibleReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  return (
    <section className="section-padding max-w-6xl mx-auto bg-midnight/70 backdrop-blur-sm rounded-3xl">
      <div className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
          {textDB.homepage["testimonal-title"]}
        </h2>
        <div className="divider-gold w-24 mx-auto mb-4" />
        <p className="text-soft-lavender/60 max-w-xl mx-auto">
          {textDB.homepage["testimonal-body"]}
        </p>
      </div>

      <div className="relative">
        {/* Navigation Arrows */}
        <button
          className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-soft-lavender hover:text-gold hover:border-gold/30 transition-all duration-300"
          onClick={prevReviews}
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-soft-lavender hover:text-gold hover:border-gold/30 transition-all duration-300"
          onClick={nextReviews}
        >
          <FiChevronRight size={20} />
        </button>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {visibleReviews.map((review, index) => (
            <div key={`${currentPage}-${index}`} className="animate-fade-in">
              <Review review={review} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentPage
                  ? "bg-gold w-6"
                  : "bg-soft-lavender/20 hover:bg-soft-lavender/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
