import React from 'react';

export const Experience = () => {
  return (
    <div>
      <div className="about-me-subheader center-align">Applying my skills.</div>
      <div class="row">
        <a href="#">
          <div class="card grey darken-1 auto-center">
            <div class="card-content white-text center-align">
              <span class="card-title">Satistics Canada</span>
              <div className="italics">01/01/2019 - 04/30/2020</div>

              <img
                src={require('../../images/canada.png')}
                className="canada-logo"
                alt=""
              />
              <div>
                <i class="material-icons right-align right-arrow">
                  keyboard_arrow_right
                </i>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="row">
        <a href="#">
          <div class="card blue-grey darken-1 auto-center">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Experience;
