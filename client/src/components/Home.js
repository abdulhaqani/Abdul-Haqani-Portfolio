import React from 'react';
import '../scss/home.scss';
import '../scss/default.scss';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Works from './Works';

export const Home = (props) => {
  let container = `container-cover ${props.darken}`;
  return (
    <div className={container} id="home-container">
      <div id="home-intro-container" className="z-depth-2">
        <div id="home-title">Abdul Haqani</div>
        <p id="intro-text">University of Ottawa Alum, Software Engineer</p>

        <p className="paragraph-text">
          Class of 2020 Graduate from the university of Ottawa, designer to my
          core, permanent student of the craft. I love to learn, create, design
          and overcome challenges while developing new things. Feel free to
          contact me!
        </p>
      </div>
    </div>
  );
};

export default Home;
