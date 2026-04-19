import React from 'react';
import '../scss/home.scss';
import '../scss/default.scss';

export const Home = (props) => {
  let container = `container-cover ${props.darken}`;
  return (
    <div className={container} id="home-container">
      <div id="home-intro-container" className="z-depth-2">
        <div id="home-title">Abdul Haqani</div>
        <p id="intro-text">Senior Full Stack Software Engineer @ Barracuda Networks</p>

        <p className="paragraph-text">
          Senior Full Stack Engineer with experience spanning fintech, cloud
          platforms, and data engineering. I build scalable systems, optimize
          performance, and bring ideas to life end to end. Always learning,
          always shipping. Feel free to contact me!
        </p>
      </div>
    </div>
  );
};

export default Home;
