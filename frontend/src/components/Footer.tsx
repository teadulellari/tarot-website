import { useContext } from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { TextDBContext } from "./contexts/TextDBContext";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  
  const textDB = useContext(TextDBContext); 


  return (
    <footer id="contact" className="bg-customColor1 py-8 backdrop-blur-md">
      <div className="container mx-auto flex flex-col items-center justify-center text-center text-customColor2">
        <h2 className="text-xl font-semibold mb-4">{textDB.footer.title}</h2>
        <p className="mt-4 mb-8">
        {textDB.footer.body}
        </p>
        <div className="flex space-x-4 mb-4 ">
          <a
            href="https://www.instagram.com/tea_leaf_tarot/"
            className="text-2xl hover:text-[#EF94CA] transition duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@tea.leaf.tarot"
            className="text-2xl hover:text-[#EF94CA] transition duration-300 hover:scale-110"
          >
            <FaTiktok />
          </a>
          <a
            href="https://wa.link/w74pkr"
            className="text-2xl hover:text-[#EF94CA] transition duration-300 hover:scale-110"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:hello@tarotcardread.com"
            className="text-2xl hover:text-[#EF94CA] transition duration-300 hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        <button
          className="mt-4 text-customColor2 hover:underline"
          onClick={() => scrollToSection("top")}
        >
          {textDB.footer["to-top"]}
        </button>
        <div className="flex justify-center mt-8 items-center">
          <p className="mx-2">&copy; {new Date().getFullYear()}  Tea Leaf Tarot </p>
          <span className="text-customColor2 mx-2">|</span>
          <p className="mx-2"> {textDB.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
