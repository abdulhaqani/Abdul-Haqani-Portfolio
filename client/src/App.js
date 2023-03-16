import React, { useEffect, Fragment, useState } from "react";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
// react components
import Sidebar from "./components/layout/Sidebar";
import Home from "./components/Home";
import Toggle from "./components/Toggle";
import AboutMe from "./components/AboutMe";
import Works from "./components/Works";
import Contact from "./components/Contact";
// scss
import "./scss/default.scss";
import "./scss/sidebar.scss";
// extras

const App = () => {
  // Materialize js initialization
  useEffect(() => {
    M.AutoInit();
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  let darken = "";
  const openHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };

  let sidebar;
  if (sidebarOpen) {
    sidebar = (
      <div className="sidebar-container open">
        <Sidebar className="sidebar open" />
        <Toggle click={openHandler} />
      </div>
    );
    darken = "darken";
  } else {
    sidebar = (
      <div className="sidebar-container">
        <Sidebar className="sidebar" />
        <Toggle click={openHandler} />
      </div>
    );
    darken = "";
  }

  return (
    <Router>
      <Fragment>
        <div className="page-wrap">
          {sidebar}
          <div
            className="main-content"
            onClick={sidebarOpen ? openHandler : console.log()}
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
            <Fade delay={500} style={{ zIndex: "inherit" }}>
              <Contact darken={darken} />
            </Fade>
          </div>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
