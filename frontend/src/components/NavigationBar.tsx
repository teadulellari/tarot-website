import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo-no-background.svg";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { TextDBContext } from "./contexts/TextDBContext";
import "/node_modules/flag-icons/css/flag-icons.min.css";

interface NavigationBarProps {
  scrollTo: (identifier: string) => void;
  changeLang: (lang: "en" | "al" | "tr") => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ scrollTo, changeLang }) => {
  const [navbar, setNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const textDB = useContext(TextDBContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const navBg = scrolled || !isHome
    ? "bg-midnight/90 backdrop-blur-xl border-b border-soft-lavender/10 shadow-lg shadow-black/20"
    : "bg-transparent";

  return (
    <nav
      id="top"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => scrollTo("#")}
          className="flex items-center shrink-0"
        >
          <img
            src={logo}
            alt="Tea Leaf Tarot"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <li>
            <Link
              to="/about-me/"
              className="text-soft-lavender/80 hover:text-gold transition-colors duration-300"
            >
              {textDB.navigationbar.about}
            </Link>
          </li>
          <li>
            <Link
              to="/#services"
              onClick={() => scrollTo("services")}
              className="text-soft-lavender/80 hover:text-gold transition-colors duration-300"
            >
              {textDB.navigationbar.readings}
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              onClick={() => scrollTo("contact")}
              className="text-soft-lavender/80 hover:text-gold transition-colors duration-300"
            >
              {textDB.navigationbar.contact}
            </Link>
          </li>
          <li>
            <Link
              to="/policies"
              className="text-soft-lavender/80 hover:text-gold transition-colors duration-300"
            >
              Policies
            </Link>
          </li>

          {/* Language flags */}
          <li className="flex items-center gap-2 ml-2">
            <button onClick={() => changeLang("al")} className="opacity-70 hover:opacity-100 transition-opacity">
              <span className="fi fi-al text-base"></span>
            </button>
            <button onClick={() => changeLang("en")} className="opacity-70 hover:opacity-100 transition-opacity">
              <span className="fi fi-us text-base"></span>
            </button>
            <button onClick={() => changeLang("tr")} className="opacity-70 hover:opacity-100 transition-opacity">
              <span className="fi fi-tr text-base"></span>
            </button>
          </li>
        </ul>

        {/* CTA Button (desktop) */}
        <Link
          to="/contactForm"
          className="hidden md:inline-flex btn-primary text-sm px-6 py-2.5"
        >
          {textDB.navigationbar.book}
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-soft-lavender"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          navbar ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-midnight/95 backdrop-blur-xl border-t border-soft-lavender/10">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/about-me/"
                onClick={() => setNavbar(false)}
                className="block text-soft-lavender/80 hover:text-gold transition-colors py-2 text-lg"
              >
                {textDB.navigationbar.about}
              </Link>
            </li>
            <li>
              <Link
                to="/#services"
                onClick={() => { scrollTo("services"); setNavbar(false); }}
                className="block text-soft-lavender/80 hover:text-gold transition-colors py-2 text-lg"
              >
                {textDB.navigationbar.readings}
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                onClick={() => { scrollTo("contact"); setNavbar(false); }}
                className="block text-soft-lavender/80 hover:text-gold transition-colors py-2 text-lg"
              >
                {textDB.navigationbar.contact}
              </Link>
            </li>
            <li>
              <Link
                to="/policies"
                onClick={() => setNavbar(false)}
                className="block text-soft-lavender/80 hover:text-gold transition-colors py-2 text-lg"
              >
                Policies
              </Link>
            </li>
            <li className="flex items-center gap-3 py-2">
              <button onClick={() => changeLang("al")} className="opacity-70 hover:opacity-100 transition-opacity">
                <span className="fi fi-al text-lg"></span>
              </button>
              <button onClick={() => changeLang("en")} className="opacity-70 hover:opacity-100 transition-opacity">
                <span className="fi fi-us text-lg"></span>
              </button>
              <button onClick={() => changeLang("tr")} className="opacity-70 hover:opacity-100 transition-opacity">
                <span className="fi fi-tr text-lg"></span>
              </button>
            </li>
            <li>
              <Link
                to="/contactForm"
                onClick={() => setNavbar(false)}
                className="btn-primary text-center text-sm w-full"
              >
                {textDB.navigationbar.book}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
