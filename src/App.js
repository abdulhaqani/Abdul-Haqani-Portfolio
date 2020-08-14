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
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1000px)',
  });
  // Materialize js initialization
  useEffect(() => {
    M.AutoInit();
  });

  const [sidebarOpen, setSidebarOpen] = useState(isDesktop);

  const openHandler = () => {
    !sidebarOpen ? setSidebarOpen(true) : setSidebarOpen(false);
  };

  return (
    <Router>
      <Fragment>
        <div className="page-wrap">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main-content">
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
