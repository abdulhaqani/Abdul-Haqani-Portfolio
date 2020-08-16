import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/sidebar.scss';
import Particles from 'react-particles-js';
import particlesConfig from '../../particlesjs-config.json';
import { useMediaQuery } from 'react-responsive';

export const Sidebar = (props) => {
  /* const isDesktop = useMediaQuery({
    query: '(min-device-width: 1000px)',
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }; */

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
              <i className="fa fa-file-text resume" aria-hidden="true"></i>
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
            <Link to={'about-me'}>
              <h4 className="nav-links">About me</h4>
            </Link>
          </li>
          <li>
            <Link to={'contact'}>
              <h4 className="nav-links">Contact</h4>
            </Link>
          </li>
          <li>
            <Link to={'works'}>
              <h4 className="nav-links">Works</h4>
            </Link>
          </li>
          <li>
            <Link to={'services'}>
              <h4 className="nav-links">Services</h4>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
