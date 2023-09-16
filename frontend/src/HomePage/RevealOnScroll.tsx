import React, { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4, // Adjust this threshold as needed
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  const animationStyles = {
    transition: "opacity 1.5s ease, transform 1.5s ease",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
  };

  return (
    <div ref={ref} style={animationStyles}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
