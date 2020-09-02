import React from 'react';
import '../scss/works.scss';
import '../scss/contact.scss';
import '../scss/default.scss';

export const Works = (props) => {
  let background = `works-background ${props.darken}`;

  return (
    <div className={background}>
      <div>
        <h1 className="header">Works</h1>
        <br />
        <div className="works-cards center-align">
          <div className="works-class-container grey-text text-lighten-3">
            <h6 className="works-class">Hackathons</h6>
            <hr style={{ width: '90%' }} />
            <br />
          </div>

          <div className="card works-card center-align bring-it grey-text text-lighten-4">
            <div className="card-content waves-effect">
              <br />
              <span className="card-header">BringIt</span>
              <div className="italics">uOttahack 3</div>

              <div>
                <p style={{ 'margin-left': '10%', 'margin-top': '3%' }}>
                  Node.Js | Express | MongoDB
                  <i className="material-icons right-align right-arrow">
                    keyboard_arrow_right
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="card works-card center-align ecosnap grey-text text-lighten-4">
            <div className="card-content waves-effect">
              <br />
              <span className="card-header">EcoSnap</span>
              <div className="italics">Cu Hacking 4 Winning Project</div>
              <div>
                <p style={{ 'margin-left': '10%', 'margin-top': '3%' }}>
                  Kotlin | Android Studio | Python | Keras
                  <i className="material-icons right-align right-arrow">
                    keyboard_arrow_right
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="works-class-container grey-text text-lighten-3">
            <h6 className="works-class">Freelancing</h6>
            <hr style={{ width: '90%' }} />
            <br />
          </div>
          <div className="card works-card center-align mercury-scraping grey-text text-lighten-4">
            <div className="card-content waves-effect">
              <br />
              <span className="card-header">Mercury Scraping</span>
              <div className="italics">Freelance Project</div>
              <div>
                <p style={{ 'margin-left': '10%', 'margin-top': '3%' }}>
                  Python | Django | PostgreSQL
                  <i className="material-icons right-align right-arrow">
                    keyboard_arrow_right
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
