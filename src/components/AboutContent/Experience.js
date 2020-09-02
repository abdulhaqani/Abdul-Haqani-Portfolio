import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const Experience = () => {
  useEffect(() => {
    var myModal = document.querySelectorAll('.modal');
    M.Modal.init(myModal, {});
  }, []);
  return (
    <div>
      <div className="about-me-subheader center-align">Applying my skills.</div>
      <div className="row">
        <div className="card card-hover modal-stats-can auto-center">
          <a className="modal-trigger" href="#modal-stats-can">
            <div className="card-content white-text center-align waves-effect waves-light">
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
          </a>
        </div>

        <div
          id="modal-stats-can"
          className="modal modal-stats-can modal-orientation"
        >
          <div className="modal-content grey-text text-lighten-2">
            <img
              src={require('../../images/statistics-canada.png')}
              className="statistics-canada-logo"
              alt=""
            />
            <h4>Software Developer</h4>
            <h6 className="italics">01/01/2019 - 04/30/2020</h6>
            <p>
              <br />
              Developed a full stack app with a Python Django PostgreSQL stack
              with a colleague that uses web scrapers to pull data from various
              social medias and perform analytics on it. The social medias
              included in the web scraping were Twitter and Reddit. The data and
              web scrapers were interfaced with the application to display
              information to the users. The purpose of the application was to
              allow journalists to send requests for public sentiment data on
              various journalism topics instead of having to manually search for
              it.
            </p>
            <div className="chip-align">
              <div className="chip">ReactJS</div>
              <div className="chip">Node.js </div>
              <div className="chip">Python</div>
              <div className="chip">Django</div>
              <div className="chip">MongoDB</div>
              <div className="chip">PostgreSQL</div>
            </div>
          </div>
          <div className="modal-footer modal-stats-can">
            <a
              href="#!"
              className="modal-close white-text waves-effect waves-light waves-grey btn-flat "
            >
              Agree
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="card card-hover freelancing-bg center-align auto-center">
          <a
            className="modal-trigger  grey-text text-lighten-2"
            href="#modal-freelancing"
          >
            <div className="card-content center-align waves-effect waves-purple card-fit">
              <div className="italics">01/05/2020 - Current</div>

              <h1 className="freelance-card italics">Freelancing</h1>

              <div>
                <i className="material-icons right-align right-arrow">
                  keyboard_arrow_right
                </i>
                <br />
              </div>
            </div>
          </a>
        </div>

        <div
          id="modal-freelancing"
          className="modal modal-orientation freelancing-bg grey-text text-lighten-1"
        >
          <div className="modal-content">
            <h2 className="center-align my-modal-header underline italics">
              Freelancing
            </h2>
            <h4>Mercury Web Scraping</h4>
            <p>
              Developed a full stack app with a Python Django PostgreSQL stack
              with a colleague that uses web scrapers to pull data from various
              social medias and perform analytics on it. The social medias
              included in the web scraping were Twitter and Reddit. The data and
              web scrapers were interfaced with the application to display
              information to the users. The purpose of the application was to
              allow journalists to send requests for public sentiment data on
              various journalism topics instead of having to manually search for
              it.
            </p>
            <div className="chip-align">
              <div className="chip">Python</div>
              <div className="chip">Django </div>
              <div className="chip">PostgreSQL</div>
              <div className="chip">Web-Scraping</div>
              <div className="chip">API</div>
            </div>
          </div>
          <div className="modal-footer freelancing-bg">
            <a
              href="#!"
              className="modal-close waves-effect waves-purple btn-flat grey-text text-lighten-1"
            >
              Agree
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
