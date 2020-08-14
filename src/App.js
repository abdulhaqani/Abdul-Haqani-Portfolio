import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
// react components
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';
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
