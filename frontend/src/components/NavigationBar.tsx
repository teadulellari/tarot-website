import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo-no-background.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface NavigationBarProps {
  scrollTo: (identifier: string) => void
}

const NavigationBar: React.FC<NavigationBarProps> = ({scrollTo}) => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  
  return (
    <nav id="top" className={location.pathname == "/" ? "w-full bg-transparent" : "w-full bg-customColor1"}>
      <div className="justify-between mx-auto mb-30 md:flex md:items-center md:px-8 border-b border-white border-opacity-20">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex items-center justify-center w-32 h-30 md:w-54 md:h-30 lg:w-64 lg:h-30">
              <Link to="/" onClick={() => scrollTo("#")}>
                <img src={logo} alt="Logo" className="object-contain h-full w-full" />
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <FaTimes className="w-6 h-6 text-white" />
                ) : (
                  <FaBars className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex items-center justify-center md:justify-center flex-grow ${
            navbar ? "mt-20" : ""
          }`}
        >
          <div
            className={`pb-3 md:block md:pb-0 md:mt-0 ${
              navbar ? "" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-20 md:space-y-0">
              <li className="text-indigo-200 hover:text-white">
                <Link to="/about-me/">About Me</Link>
              </li>
              <li className="text-indigo-200 hover:text-white">
                <Link to="/#services" onClick={() => scrollTo("services")}>Readings</Link>
              </li>
              <li className="text-indigo-200 hover:text-white">
                <Link to="/#contact" onClick={() => scrollTo("contact")}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "" : "hidden"
          }`}
        >
          <div className="flex items-center justify-center space-x-3">
            <img
              width="66"
              height="66"
              src="https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/66/external-Tarot-magic-and-fairy-tales-smashingstocks-outline-color-smashing-stocks.png"
              alt="external-Tarot-magic-and-fairy-tales-smashingstocks-outline-color-smashing-stocks"
            />
            <a
              href="https://calendly.com/teadulellari/tarot-reading"
              className="inline-block px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4 lg:mt-0"
            >
              Book a reading
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
