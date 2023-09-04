import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa"; // You may need to install react-icons

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use smooth scrolling for a smoother transition
    });
  };

  return (
    <footer className="bg-customColor1 py-8">
      <div className="container mx-auto flex flex-col items-center text-customColor2">
        <h2 className="text-xl font-semibold mb-4">Your cup of Tea?</h2>
        <p className="mt-4 mb-8">
          Follow us on social media for updates and tarot readings.
        </p>
        <div className="flex space-x-4 mb-4">
          <a
            href="#"
            className="text-2xl hover:text-customColor2 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-customColor2 transition duration-300"
          >
            <FaTiktok />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-customColor2 transition duration-300"
          >
            <FaFacebook />
          </a>
        </div>

        <button
          className="mt-4 text-customColor2 hover:underline"
          onClick={scrollToTop}
        >
          Back to Top &#8593;
        </button>
        <div className="flex justify-center mt-8 items-center">
          <p className="mr-4">&copy; {new Date().getFullYear()}  Tea Leaf Tarot </p>
          <span>|</span>
          <p className="ml-4"> All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
