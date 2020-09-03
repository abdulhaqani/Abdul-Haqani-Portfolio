import React, { useEffect } from 'react';
import '../scss/works.scss';
import '../scss/default.scss';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

export const Works = (props) => {
  let background = `works-background ${props.darken}`;
  useEffect(() => {
    var myModal = document.querySelectorAll('.modal');
    M.Modal.init(myModal, {});
  }, []);
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

          <div className="card works-card center-align bring-it grey-text text-lighten-4 waves-effect waves-light">
            <a
              className="modal-trigger grey-text text-lighten-3"
              href="#modal-bringit"
            >
              <div className="card-content">
                <br />
                <span className="card-header">BringIt</span>
                <div className="italics">uOttahack 3</div>

                <div>
                  <p
                    style={{
                      'margin-left': '10%',
                      'margin-top': '3%',
                      'margin-bottom': '3%',
                    }}
                  >
                    Node.Js | Express | MongoDB
                    <i className="material-icons right-align right-arrow">
                      keyboard_arrow_right
                    </i>
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div id="modal-bringit" className="modal bring-it modal-orientation">
            <div className="modal-content grey-text text-lighten-2">
              <h4>BringIt</h4>
              <h6 className="italics">01/01/2019 - 04/30/2020</h6>
              <p>
                <br />
                Developed a full stack app with a Python Django PostgreSQL stack
                with a colleague that uses web scrapers to pull data from
                various social medias and perform analytics on it. The social
                medias included in the web scraping were Twitter and Reddit. The
                data and web scrapers were interfaced with the application to
                display information to the users. The purpose of the application
                was to allow journalists to send requests for public sentiment
                data on various journalism topics instead of having to manually
                search for it.
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
            <div className="modal-footer bring-it">
              <a
                href="#!"
                className="modal-close white-text waves-effect waves-light waves-grey btn-flat"
              >
                Agree
              </a>
            </div>
          </div>

          <div className="card works-card center-align ecosnap grey-text text-lighten-4 waves-effect waves-light">
            <a
              className="modal-trigger grey-text text-lighten-3"
              href="#modal-ecosnap"
            >
              <div className="card-content">
                <br />
                <span className="card-header">EcoSnap</span>
                <div className="italics">Cu Hacking 4 Winning Project</div>
                <div>
                  <p
                    style={{
                      'margin-left': '10%',
                      'margin-top': '3%',
                      'margin-bottom': '3%',
                    }}
                  >
                    Kotlin | Android Studio | Python | Keras
                    <i className="material-icons right-align right-arrow">
                      keyboard_arrow_right
                    </i>
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div id="modal-ecosnap" className="modal ecosnap modal-orientation">
            <div className="modal-content grey-text text-lighten-2">
              <h4>EcoSnap</h4>
              <h6 className="italics">Cu Hacking 4</h6>
              <p>
                <br />
                Developed a full stack app with a Python Django PostgreSQL stack
                with a colleague that uses web scrapers to pull data from
                various social medias and perform analytics on it. The social
                medias included in the web scraping were Twitter and Reddit. The
                data and web scrapers were interfaced with the application to
                display information to the users. The purpose of the application
                was to allow journalists to send requests for public sentiment
                data on various journalism topics instead of having to manually
                search for it.
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
            <div className="modal-footer ecosnap">
              <a
                href="#!"
                className="modal-close white-text waves-effect waves-green btn-flat"
              >
                Agree
              </a>
            </div>
          </div>

          <div className="works-class-container grey-text text-lighten-3">
            <h6 className="works-class">Freelancing</h6>
            <hr style={{ width: '90%' }} />
            <br />
          </div>

          <div className="card works-card center-align mercury-scraping grey-text text-lighten-4 waves-effect waves-red">
            <a
              className="modal-trigger grey-text text-lighten-3"
              href="#modal-mercury-scraping"
            >
              <div className="card-content">
                <br />
                <span className="card-header">Mercury Scraping</span>
                <div className="italics">Freelance Project</div>
                <div>
                  <p
                    style={{
                      'margin-left': '10%',
                      'margin-top': '3%',
                      'margin-bottom': '3%',
                    }}
                  >
                    Python | Django | PostgreSQL
                    <i className="material-icons right-align right-arrow">
                      keyboard_arrow_right
                    </i>
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div
            id="modal-mercury-scraping"
            className="modal mercury-scraping modal-orientation"
          >
            <div className="modal-content grey-text text-lighten-2">
              <h4>Mercury Scraping</h4>
              <h6 className="italics">Freelance Project</h6>
              <p>
                <br />
                Developed a full stack app with a Python Django PostgreSQL stack
                with a colleague that uses web scrapers to pull data from
                various social medias and perform analytics on it. The social
                medias included in the web scraping were Twitter and Reddit. The
                data and web scrapers were interfaced with the application to
                display information to the users. The purpose of the application
                was to allow journalists to send requests for public sentiment
                data on various journalism topics instead of having to manually
                search for it.
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
            <div className="modal-footer mercury-scraping">
              <a
                href="#!"
                className="modal-close white-text waves-effect waves-green btn-flat"
              >
                Agree
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
