/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./HomePage/HomePage";
import ReadingDetails from "./components/ReadingDetails";
import AboutMe from "./components/AboutMe";
import NavigationBar from "./components/NavigationBar";
import textData from "./data/language.json";
import ClientForm from "./components/ClientForm";
import { TextDB } from "./Types";
import { TextDBContext } from "./components/contexts/TextDBContext";
import PoliciesPage from "./components/PoliciesPage";

const scrollToSection = (sectionId: string) => {
  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};

const browserLang = () => {
  const lang = window.navigator.language;
  if (lang.includes("al")) return "al";
  if (lang.includes("tr")) return "tr";
  return "en";
};

const App = () => {
  const [lang, setLang] = useState<"en" | "al" | "tr">(browserLang());
  const textDB: TextDB = textData[lang];

  return (
    <TextDBContext.Provider value={textDB}>
      <BrowserRouter>
        {/* Starfield background */}
        <div className="starfield" />

        {/* Main content */}
        <div className="relative z-10">
          <NavigationBar
            scrollTo={scrollToSection}
            changeLang={(lang) => setLang(lang)}
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/reading/:readingType/details"
              element={<ReadingDetails scrollTo={scrollToSection} />}
            />
            <Route path="/about-me/" element={<AboutMe />} />
            <Route path="/contactForm" element={<ClientForm />} />
            <Route path="/policies" element={<PoliciesPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TextDBContext.Provider>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
