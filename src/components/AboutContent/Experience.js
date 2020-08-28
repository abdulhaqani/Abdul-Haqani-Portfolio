import React from 'react';

export const Experience = () => {
  return (
    <div>
      <div className="about-me-subheader center-align">Applying my skills.</div>
      <div className="row">
        <a className="modal-trigger" href="#modal1">
          <div className="card grey darken-1 auto-center">
            <div className="card-content white-text center-align waves-effect">
              <span className="card-title">Satistics Canada</span>
              <div className="italics">01/01/2019 - 04/30/2020</div>

              <img
                src={require('../../images/canada.png')}
                className="canada-logo"
                alt=""
              />
              <div>
                <i className="material-icons right-align right-arrow">
                  keyboard_arrow_right
                </i>
                <br />
              </div>
            </div>
          </div>
        </a>
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <a className="modal-trigger" href="#modal1">
          <div className="card light-blue darken-2 grey-text center-align text-darken-4 auto-center">
            <div className="card-content center-align waves-effect freelance-card-fit">
              <div className="italics">01/05/2020 - Current</div>

              <h1 className="freelance-card italics">Freelancing</h1>

              <div>
                <i className="material-icons right-align right-arrow">
                  keyboard_arrow_right
                </i>
                <br />
              </div>
            </div>
          </div>
        </a>

        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
