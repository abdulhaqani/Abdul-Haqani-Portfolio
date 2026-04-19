import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { BrowserRouter as Router } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
// react components
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';
import Toggle from './components/Toggle';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Contact from './components/Contact';
// scss
import './scss/default.scss';
import './scss/sidebar.scss';
// extras

const App = () => {
  // Materialize js initialization
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openHandler = () => {
    setSidebarOpen((prev) => !prev);
  };

  const darken = sidebarOpen ? 'darken' : '';

  return (
    <Router>
      <>
        <div className="page-wrap">
          <div className={`sidebar-container ${sidebarOpen ? 'open' : ''}`}>
            <Sidebar className={`sidebar ${sidebarOpen ? 'open' : ''}`} />
            <Toggle click={openHandler} />
          </div>
          <div
            className="main-content"
            onClick={sidebarOpen ? openHandler : undefined}
          >
            <Fade delay={250}>
              <Home darken={darken} />
            </Fade>
            <Fade delay={500}>
              <AboutMe darken={darken} />
            </Fade>
            <Fade delay={500} opposite={true} style={{ zIndex: 0 }}>
              <Works darken={darken} />
            </Fade>
            <Fade delay={500} style={{ zIndex: 'inherit' }}>
              <Contact darken={darken} />
            </Fade>
          </div>
        </div>
      </>
    </Router>
  );
};

export default App;
