import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/sidebar.scss';

export const Sidebar = () => {
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
        <ul>
          <li className="sidebar-navigation">
            <Link to={'about-me'} activeClassName="active">
              <h3 className="nav-links">About me</h3>
            </Link>
          </li>
          <li>
            <Link to={'contact'} activeClassName="active">
              <h3 className="nav-links">Contact</h3>
            </Link>
          </li>
          <li>
            <Link to={'works'} activeClassName="active">
              <h3 className="nav-links">Works</h3>
            </Link>
          </li>
          <li>
            <Link to={'services'} activeClassName="active">
              <h3 className="nav-links">Services</h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
