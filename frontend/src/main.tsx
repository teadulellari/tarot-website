import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './HomePage/HomePage';
import ReadingDetails from './components/ReadingDetails';
import AboutMe from './components/AboutMe';
import NavigationBar from './components/NavigationBar';
import textData from './data/language.json';
import { TextDB } from './Types';
import { TextDBContext } from './components/contexts/TextDBContext';

const scrollToSection = (sectionId: string) => {
  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, 100);
};

const browserLang = () => {
  const browserLang = window.navigator.language
  if(browserLang.includes("al"))
    return "al"
  if(browserLang.includes("tr"))
    return "tr"
  return "en"
}

const App = () => {
  const [lang, setLang]= useState< "en" | "al" | "tr" >(browserLang())
  let textDB: TextDB = textData[lang]
  return (
    <TextDBContext.Provider value={textDB}>
    <BrowserRouter>
      <NavigationBar scrollTo={scrollToSection} changeLang={(lang) => setLang(lang)}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reading/:readingType/details" element={<ReadingDetails scrollTo={scrollToSection} />} />
        <Route path="/about-me/" element={<AboutMe />}/>
      </Routes>
    </BrowserRouter>
    </TextDBContext.Provider>
  );
};

const root = document.getElementById('root'); // or your target DOM element

// Use ReactDOM.render
ReactDOM.render(<App />, root);
