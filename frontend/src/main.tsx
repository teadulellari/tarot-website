import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './HomePage/HomePage';
import ReadingDetails from './components/ReadingDetails';
import AboutMe from './components/AboutMe';
import NavigationBar from './components/NavigationBar';

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

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar scrollTo={scrollToSection}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reading/:readingType/details" element={<ReadingDetails scrollTo={scrollToSection} />} />
        <Route path="/about-me/" element={<AboutMe />}/>
      </Routes>
    </BrowserRouter>
  );
};

const root = document.getElementById('root'); // or your target DOM element

// Use ReactDOM.render
ReactDOM.render(<App />, root);
