import React, { useEffect, Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  let darken = '';
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
    darken = 'darken';
  } else {
    sidebar = (
      <div className="sidebar-container">
        <Sidebar className="sidebar" />
        <Toggle click={openHandler} />
      </div>
    );
    darken = '';
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
            <Switch>
              )}
              <Route
                exact
                path="/"
                render={(routeProps) => <Home darken={darken} />}
              />
              <Route path="/about-me" component={AboutMe} />
              <Route exact path="/works" component={Works} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
