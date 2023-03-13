import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../scss/aboutMe.scss';
import '../scss/home.scss';
import Story from './AboutContent/Story';
import Education from './AboutContent/Education';
import Experience from './AboutContent/Experience';

export const AboutMe = (props) => {
  let container = `container-cover ${props.darken}`;
  return (
    <Router>
      <div className={container}>
        <div className="row header-container">
          <div className="header condensed thin">Hi I'm Abdul Haqani!</div>
          <div className="about-nav">
            <Link to={'/about'}>
              <i className="material-icons about-icons">person</i>
            </Link>
            <Link to={'/about/education'}>
              <i className="fa fa-graduation-cap about-icons"></i>
            </Link>
            <Link to={'/about/experience'}>
              <i className="fa fa-book about-icons"></i>
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/about/education" component={Education} />
          <Route path="/about/experience" component={Experience} />
          <Route path={['/', '/about']} component={Story} />
        </Switch>
      </div>
    </Router>
  );
};

export default AboutMe;
