import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';
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
            </Switch>
          </div>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
