import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { BrowserRouter as Router } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
// react components
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';
import Toggle from './components/Toggle';
import Services from './components/Services';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Contact from './components/Contact';
// scss
import './scss/default.scss';
import './scss/sidebar.scss';

const App = () => {
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
            <div className="section-bg section-bg--home">
              <Fade delay={100}>
                <Home darken={darken} />
              </Fade>
            </div>
            <div className="section-bg section-bg--services">
              <Fade delay={100}>
                <Services darken={darken} />
              </Fade>
            </div>
            <div className="section-bg section-bg--about">
              <Fade delay={100}>
                <AboutMe darken={darken} />
              </Fade>
            </div>
            <div className="section-bg section-bg--works">
              <Fade delay={100}>
                <Works darken={darken} />
              </Fade>
            </div>
            <div className="section-bg section-bg--contact">
              <Fade delay={100}>
                <Contact darken={darken} />
              </Fade>
            </div>
          </div>
        </div>
      </>
    </Router>
  );
};

export default App;
