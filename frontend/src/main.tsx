import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationBar from './components/NavigationBar';
import Slogan from './components/Slogan';
import Services from './components/Services';
import HomePage from './HomePage/HomePage';

// const RotatingElement = () => {
//   const [rotation, setRotation] = useState(0);
//   const [isScrolling, setIsScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolling(true);
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrollPercentage = scrollTop / maxScrollHeight;
//       const maxRotation = 360;
//       const rotation = scrollPercentage * maxRotation;
//       setRotation(rotation);
//     };

//     const throttle = (callback: () => void, delay: number) => {
//       let throttleTimeout: ReturnType<typeof setTimeout> | null = null;
//       let lastExecTime: number | null = null;

//       return function () {
//         const throttledFunction = () => {
//           callback();
//           lastExecTime = Date.now();
//           throttleTimeout = null;
//         };

//         const timeSinceLastExec = Date.now() - (lastExecTime || 0);

//         if (!lastExecTime || timeSinceLastExec >= delay) {
//           throttledFunction();
//         }

//         if (!throttleTimeout) {
//           throttleTimeout = setTimeout(throttledFunction, delay);
//         }
//       };
//     };

//     const throttledScroll = throttle(handleScroll, 200); // Aelay

//     window.addEventListener('scroll', throttledScroll);

//     return () => {
//       window.removeEventListener('scroll', throttledScroll);
//     };
//   }, []);

//   return (
//     <div
//       id="rotating-element"
//       style={{
//         transform: `translate(-50%, -50%) rotate(${isScrolling ? rotation : 0}deg)`
//       }}
//     ></div>
//   );
// };

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
