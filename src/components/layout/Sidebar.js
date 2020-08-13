import React from 'react';
import '../../scss/sidebar.scss';
export const Sidebar = () => {
  return (
    <div>
      <div className="side-bar-container">
        <div className="link-row">
          <ul className="links">
            <li className="link">1</li>
            <li className="link">2</li>
            <li className="link">3</li>
            <li className="link">4</li>
          </ul>
        </div>
        <ul>
          <li className="sidebar-navigation">
            <a href="#">
              <h4>Link 1</h4>
            </a>
          </li>
          <li>
            <a href="#">
              <h4>Link 2</h4>
            </a>
          </li>
          <li>
            <a href="#">
              <h4>Link 3</h4>
            </a>
          </li>
          <li>
            <a href="#">
              <h4>Link 4</h4>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
