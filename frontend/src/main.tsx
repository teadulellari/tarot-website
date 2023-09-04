import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage/HomePage';


const App = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <React.StrictMode>
     <HomePage />
     {/* <RotatingElement /> */}
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
