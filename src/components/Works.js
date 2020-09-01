import React from 'react';
import '../scss/works.scss';
import '../scss/default.scss';

export const Works = (props) => {
  let background = `works-background ${props.darken}`;

  return (
    <div className={background}>
      <div className="works-cards">
        <div className="card works-card center-align">
          <div className="card-content center-align waves-effect">
            <span className="card-title ">BringIt</span>
            <div className="italics">uOttahack 3</div>

            <div>
              <i className="material-icons right-align right-arrow">
                keyboard_arrow_right
              </i>
              <br />
            </div>
          </div>
        </div>
        <div className="card works-card center-align">
          <div className="card-content center-align waves-effect">
            <span className="card-title ">BringIt</span>
            <div className="italics">uOttahack 3</div>

            <div>
              <i className="material-icons right-align right-arrow">
                keyboard_arrow_right
              </i>
              <br />
            </div>
          </div>
        </div>
        <div className="card works-card center-align">
          <div className="card-content center-align waves-effect">
            <span className="card-title ">BringIt</span>
            <div className="italics">uOttahack 3</div>

            <div>
              <i className="material-icons right-align right-arrow">
                keyboard_arrow_right
              </i>
              <br />
            </div>
          </div>
        </div>
        <div className="card works-card center-align">
          <div className="card-content center-align waves-effect">
            <span className="card-title ">BringIt</span>
            <div className="italics">uOttahack 3</div>

            <div>
              <i className="material-icons right-align right-arrow">
                keyboard_arrow_right
              </i>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
