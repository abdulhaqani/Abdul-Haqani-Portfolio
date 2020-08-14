import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/sidebar.scss';
import Particles from 'react-particles-js';
import particlesConfig from '../../particlesjs-config.json';
import { useMediaQuery } from 'react-responsive';

export const Sidebar = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1000px)',
  });
  return (
    <div>
      <div className="side-bar-container">
        <div className="link-row">
          <ul className="links">
            <li className="link">
              <Link to={'/'} activeClassName="active">
                <i class="fa fa-home home" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="link">
              <a
                href="https://github.com/abdulhaqani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-github github" aria-hidden="true"></i>
              </a>
            </li>
            <li className="link">
              <a
                href="https://www.linkedin.com/in/abdulrahman-haqani-173a5611b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-linkedin linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li className="link">
              <i class="fa fa-file-text resume" aria-hidden="true"></i>
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
            <Link to={'about-me'} activeClassName="active">
              <h4 className="nav-links">About me</h4>
            </Link>
          </li>
          <li>
            <Link to={'contact'} activeClassName="active">
              <h4 className="nav-links">Contact</h4>
            </Link>
          </li>
          <li>
            <Link to={'works'} activeClassName="active">
              <h4 className="nav-links">Works</h4>
            </Link>
          </li>
          <li>
            <Link to={'services'} activeClassName="active">
              <h4 className="nav-links">Services</h4>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
