import { useState } from "react";
import logo from '../assets/logo-no-background.svg';

const NavigationBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-transparent shadow h-20">
      <div className="justify-between mx-auto lg:max-w-7xl md:flex md:items-center md:px-8 border-b border-white border-opacity-20">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex items-center justify-center w-20 h-20 md:w-60 md:h-22">
              <a href="javascript:void(0)">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {/* SVG paths for the close icon */}
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    {/* SVG paths for the menu icon */}
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-center flex-grow">
          <div
            className={`pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-20 md:space-y-0">
              <li className="text-indigo-200 hover:text-white">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li className="text-indigo-200 hover:text-white">
                <a href="javascript:void(0)">Pages</a>
              </li>
              <li className="text-indigo-200 hover:text-white">
                <a href="javascript:void(0)">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div
          className={`pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "" : "hidden"
          }`}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="10 10 10 10"
            fill="none"
          ></svg> */}
          <div className="flex items-center space-x-3">
          <img width="66" height="66" src="https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/66/external-Tarot-magic-and-fairy-tales-smashingstocks-outline-color-smashing-stocks.png" alt="external-Tarot-magic-and-fairy-tales-smashingstocks-outline-color-smashing-stocks"/>
          <a
            href="#"
            className="inline-block px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-700 hover:bg-white mt-4 lg:mt-0"
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
