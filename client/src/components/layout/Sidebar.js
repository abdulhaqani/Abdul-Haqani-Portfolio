import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/sidebar.scss';
import Particles from 'react-tsparticles';
import particlesConfig from '../../particlesjs-config.json';

export const Sidebar = (props) => {
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
        <Particles
          params={particlesConfig}
          width={'20vw'}
          height={'80vw'}
          className="particles-canvas"
        />
        <ul>
          <li>
            <Link to={'/'}>
              <h4 className="nav-links">Home</h4>
            </Link>
          </li>
          <li>
            <Link to={'/about'}>
              <h4 className="nav-links">About</h4>
            </Link>
          </li>
          <li>
            <Link to={'/works'}>
              <h4 className="nav-links">Works</h4>
            </Link>
          </li>
          <li>
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
