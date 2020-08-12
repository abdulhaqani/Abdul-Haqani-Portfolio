import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Sidebar from './components/layout/Sidebar';
import Home from './components/Home';

const App = () => {
  // Materialize js initialization
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Router>
      <Fragment>
        <div className="page-wrap">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
