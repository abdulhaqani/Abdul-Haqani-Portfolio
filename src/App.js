import React, { useEffect, Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useMediaQuery } from 'react-responsive';
// react components
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';
import Toggle from './components/Toggle';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Contact from './components/Contact';
import Services from './components/Services';
// scss
import './scss/default.scss';
import './scss/sidebar.scss';

const App = () => {
  // Materialize js initialization
  useEffect(() => {
    M.AutoInit();
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  let pageWrap = 'page-wrap';
  const openHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };

  let sidebar;
  if (sidebarOpen) {
    sidebar = <Sidebar className="sidebar open" />;
    pageWrap = 'page-wrap darken';
  } else {
    sidebar = <Sidebar className="sidebar" />;
    pageWrap = 'page-wrap';
  }

  return (
    <Router>
      <Fragment>
        <div className={pageWrap}>
          <div className="sidebar-container">
            {sidebar}
            <Toggle click={openHandler} />
          </div>
          <div
            className="main-content"
            onClick={sidebarOpen ? openHandler : console.log()}
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about-me" component={AboutMe} />
              <Route exact path="/works" component={Works} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/services" component={Services} />
            </Switch>
          </div>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
