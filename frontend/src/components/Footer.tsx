import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"; // You may need to install react-icons

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    console.log("started scrolling");
    window.scrollTo({
      top: 20,
      behavior: "smooth",
    });
    console.log("end");
  };

  return (
    <footer className="bg-customColor1 py-8 backdrop-blur-md">
      <div className="container mx-auto flex flex-col items-center justify-center text-center text-customColor2">
        <h2 className="text-xl font-semibold mb-4">Your cup of Tea?</h2>
        <p className="mt-4 mb-8">
          Follow us on social media for updates and tarot readings.
        </p>
        <div className="flex space-x-4 mb-4">
          <a
            href="#"
            className="text-2xl hover:text-[#EF94CA] transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-[#EF94CA] transition duration-300"
          >
            <FaTiktok />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-[#EF94CA] transition duration-300"
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
          <p className="mx-2">&copy; {new Date().getFullYear()}  Tea Leaf Tarot </p>
          <span className="text-customColor2 mx-2">|</span>
          <p className="mx-2"> All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
