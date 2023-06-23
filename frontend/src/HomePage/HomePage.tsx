import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo-no-background.svg";
import Slogan from "../components/Slogan";
import Services from "../components/Services";
import NavigationBar from "../components/NavigationBar";
import Experience from "../components/Experience";

const HomePage: React.FC = () => {
    const [navbar, setNavbar] = useState(false);
  
    return (
      <div className="grid grid-rows-[auto,auto,1fr] gap-11">
        <NavigationBar navbar={navbar} setNavbar={setNavbar} />
        <Slogan extendedMenuOpen={navbar} />
        <Services />
        <Experience />
      </div>
    );
  };
  
  export default HomePage;