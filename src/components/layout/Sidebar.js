import { React, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/sidebar.scss';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from '../../particlesjs-config.json';

export const Sidebar = (props) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {}, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className={props.className}>
        <div className="link-row">
          <ul className="links">
            <li className="link">
              <Link to={'/'} aria-label="Home">
                <i className="fa fa-home home" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="link">
              <a
                href="https://github.com/abdulhaqani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fa fa-github github" aria-hidden="true"></i>
              </a>
            </li>
            <li className="link">
              <a
                href="https://www.linkedin.com/in/abdulrahman-haqani-173a5611b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li className="link">
              <a
                href={require('../../images/Abdul_Haqani_C_resume.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
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
            <button className="nav-links" onClick={() => scrollTo('home-container')}>
              Home
            </button>
          </li>
          <li className="nav-link-li">
            <button className="nav-links" onClick={() => scrollTo('services')}>
              Services
            </button>
          </li>
          <li className="nav-link-li">
            <button className="nav-links" onClick={() => scrollTo('about')}>
              About
            </button>
          </li>
          <li className="nav-link-li">
            <button className="nav-links" onClick={() => scrollTo('works')}>
              Projects
            </button>
          </li>
          <li className="nav-link-li">
            <button className="nav-links" onClick={() => scrollTo('contact')}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
