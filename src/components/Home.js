import React from 'react';
import '../scss/home.scss';
import '../scss/default.scss';
import Contact from './Contact';

export const Home = (props) => {
  let background = `home-background ${props.darken}`;
  return (
    <div className={background}>
      <div className="home-container">
        <div className="home-intro-container z-depth-2">
          <div className="home-content">
            <div className="home-title">Abdul Haqani</div>
            <p className="intro-text">
              University of Ottawa Alum, Junior Software Engineer
            </p>

            <p className="paragraph-text">
              Recent graduate from the university of Ottawa, designer to my
              core, permanent student of the craft. I love to learn, create,
              design and overcome challenges while developing new things. Feel
              free to contact me!
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
