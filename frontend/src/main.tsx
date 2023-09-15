import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage/HomePage';
import LoveReading from './components/LoveReading';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/love-reading-details" element={<LoveReading />} />

      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
