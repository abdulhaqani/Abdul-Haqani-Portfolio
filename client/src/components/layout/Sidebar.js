import { React, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/sidebar.scss';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from '../../particlesjs-config.json';

export const Sidebar = (props) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const homeBtnScroll = () => {
    const homeElement = document.getElementById('home-container');

    if (homeElement) {
      // 👇 Will scroll smoothly to the top of the next section
      homeElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const aboutBtnScroll = () => {
    const aboutElement = document.getElementById('about');

    if (aboutElement) {
      // 👇 Will scroll smoothly to the top of the next section
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const worksBtnScroll = () => {
    const worksElement = document.getElementById('works');

    if (worksElement) {
      // 👇 Will scroll smoothly to the top of the next section
      worksElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactBtnScroll = () => {
    const contactElement = document.getElementById('contact');

    if (contactElement) {
      // 👇 Will scroll smoothly to the top of the next section
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className={props.className}>
        <div className="link-row">
          <ul className="links">
            <li className="link">
              <Link to={'/'}>
                <i className="fa fa-home home" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="link">
              <a
                href="https://github.com/abdulhaqani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github github" aria-hidden="true"></i>
              </a>
            </li>
            <li className="link">
              <a
                href="https://www.linkedin.com/in/abdulrahman-haqani-173a5611b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li className="link">
              <a
                href={require('../../images/Abdul_Haqani_C_resume.pdf')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-file-text resume" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="particles-container">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
            width="100%"
            height="100%"
            className="particles-canvas"
          />
        </div>

        <ul className="nav-link-list">
          <li className="nav-link-li">
            <h4 className="nav-links" onClick={homeBtnScroll}>
              Home
            </h4>
          </li>
          <li className="nav-link-li">
            <h4 className="nav-links" onClick={aboutBtnScroll}>
              About
            </h4>
          </li>
          <li className="nav-link-li">
            <h4 className="nav-links" onClick={worksBtnScroll}>
              Works
            </h4>
          </li>
          <li className="nav-link-li">
            <h4 className="nav-links" onClick={contactBtnScroll}>
              Contact
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
