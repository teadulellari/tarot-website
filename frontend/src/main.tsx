import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationBar from './components/NavigationBar';
import Slogan from './components/Slogan';

const App = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <React.StrictMode>
      <NavigationBar navbar={navbar} setNavbar={setNavbar} />
      <Slogan extendedMenuOpen={navbar} />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
