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
  const particlesStyle = {
    position: 'fixed !important',
    'z-index': '-10',
    width: '20% !important',
    height: '100vh',
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
            <Link to={'/'}>
              <h4 className="nav-links">Home</h4>
            </Link>
          </li>
          <li className="nav-link-li">
            <Link to={'/about'}>
              <h4 className="nav-links">About</h4>
            </Link>
          </li>
          <li className="nav-link-li">
            <Link to={'/works'}>
              <h4 className="nav-links">Works</h4>
            </Link>
          </li>
          <li className="nav-link-li">
            <Link to={'/contact'}>
              <h4 className="nav-links">Contact</h4>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
