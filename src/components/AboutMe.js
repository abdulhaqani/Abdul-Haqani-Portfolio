import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../scss/aboutMe.scss';
import Story from './AboutContent/Story';
import Education from './AboutContent/Education';
import Experience from './AboutContent/Experience';

export const AboutMe = (props) => {
  let background = `about-me-background ${props.darken}`;
  return (
    <Router>
      <div className={background}>
        <div className="row header-container">
          <div className="header condensed thin">About Abdul Haqani</div>
          <div className="about-nav">
            <Link to={'/about-me'}>
              <i className="material-icons about-icons">person</i>
            </Link>
            <Link to={'/about-me/education'}>
              <i className="fa fa-graduation-cap about-icons"></i>
            </Link>
            <Link to={'/about-me/experience'}>
              <i className="fa fa-book about-icons"></i>
            </Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/about-me/education" component={Education} />
          <Route exact path="/about-me/experience" component={Experience} />
          <Route exact path={['/', '/about-me']} component={Story} />
        </Switch>
      </div>
    </Router>
  );
};

export default AboutMe;
