import React from 'react';
import '../scss/home.scss';
import '../scss/default.scss';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Works from './Works';

export const Home = (props) => {
  let background = `home-background ${props.darken}`;
  return (
    <div className={background}>
      <div className="home-container">
        <div className="home-intro-container z-depth-2">
          <div className="home-title">Abdul Haqani</div>
          <p className="intro-text">
            University of Ottawa Alum, Junior Software Engineer
          </p>

          <p className="paragraph-text">
            Recent graduate from the university of Ottawa, designer to my core,
            permanent student of the craft. I love to learn, create, design and
            overcome challenges while developing new things. Feel free to
            contact me!
          </p>
        </div>
      </div>
      <div className="border-mine">
        <AboutMe darken={props.darken} />
      </div>
      <div className="border-mine">
        <Works darken={props.darken} />
      </div>
      <div className="border-mine">
        <Contact darken={props.darken} />
      </div>
    </div>
  );
};

export default Home;
