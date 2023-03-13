import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const Experience = () => {
  useEffect(() => {
    var myModal = document.querySelectorAll('.modal');
    const moodalInstance = M.Modal.init(myModal, { preventScrolling: true });
  }, []);
  //<h1 className="freelance-card italics">Freelancing</h1>;

  return (
    <div>
      <div className="about-me-subheader center-align">Applying my skills.</div>
      <div className="row">
        <div className="col s1"></div>
        <div className="col s4 card card-hover modal-stats-can auto-center">
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
          <div className="modal-content my-modal grey-text text-lighten-2">
            <img
              src={require('../../images/statistics-canada.png')}
              className="statistics-canada-logo"
              alt=""
            />
            <h4>Software Developer</h4>
            <h6 className="italics">01/01/2019 - 04/30/2020</h6>
            <p className="modal-paragraph">
              - Developed full stack MERN applications for various purposes,
              ranging from organizing data sets for the training of AIs, to
              integrating an AI backend with a front-end application
              <br />
              - Developed a comprehensive full stack application to integrate a
              legacy SQL database. The application looked to interact with users
              and the database, and provide a user friendly experience while
              performing analytics on the data provided from the database.
              <br />- Performed general software solutions ranging from data
              analytics using pythons extensive data visualization libraries,
              implementing a variable weighted shortest path algorithm for the
              Alberta grain transport system, and even developing a python crash
              course for some of the other individuals working in the
              organization.
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
        <div className="col s2"></div>

        <div className="col s4 card card-hover modal-stats-can auto-center">
          <a className="modal-trigger" href="#modal-stats-can-2">
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
          id="modal-stats-can-2"
          className="modal modal-stats-can modal-orientation"
        >
          <div className="modal-content my-modal grey-text text-lighten-2">
            <img
              src={require('../../images/statistics-canada.png')}
              className="statistics-canada-logo"
              alt=""
            />
            <h4>Software Developer</h4>
            <h6 className="italics">01/01/2019 - 04/30/2020</h6>
            <p className="modal-paragraph">
              - Developed full stack MERN applications for various purposes,
              ranging from organizing data sets for the training of AIs, to
              integrating an AI backend with a front-end application
              <br />
              - Developed a comprehensive full stack application to integrate a
              legacy SQL database. The application looked to interact with users
              and the database, and provide a user friendly experience while
              performing analytics on the data provided from the database.
              <br />- Performed general software solutions ranging from data
              analytics using pythons extensive data visualization libraries,
              implementing a variable weighted shortest path algorithm for the
              Alberta grain transport system, and even developing a python crash
              course for some of the other individuals working in the
              organization.
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
        <div className="col s1"></div>
        <div className="col s4 card card-hover modal-stats-can auto-center">
          <a className="modal-trigger" href="#modal-stats-can-3">
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
          id="modal-stats-can-3"
          className="modal modal-stats-can modal-orientation"
        >
          <div className="modal-content my-modal grey-text text-lighten-2">
            <img
              src={require('../../images/statistics-canada.png')}
              className="statistics-canada-logo"
              alt=""
            />
            <h4>Software Developer</h4>
            <h6 className="italics">01/01/2019 - 04/30/2020</h6>
            <p className="modal-paragraph">
              - Developed full stack MERN applications for various purposes,
              ranging from organizing data sets for the training of AIs, to
              integrating an AI backend with a front-end application
              <br />
              - Developed a comprehensive full stack application to integrate a
              legacy SQL database. The application looked to interact with users
              and the database, and provide a user friendly experience while
              performing analytics on the data provided from the database.
              <br />- Performed general software solutions ranging from data
              analytics using pythons extensive data visualization libraries,
              implementing a variable weighted shortest path algorithm for the
              Alberta grain transport system, and even developing a python crash
              course for some of the other individuals working in the
              organization.
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
        <div className="col s2"></div>

        <div className="col s4 card card-hover freelancing-bg center-align auto-center">
          <a
            className="modal-trigger  grey-text text-lighten-2"
            href="#modal-freelancing"
          >
            <div className="card-content center-align waves-effect waves-purple card-fit">
              <span className="card-title">Satistics Canada</span>
              <div className="italics">01/05/2020 - Current</div>

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
          id="modal-freelancing"
          className="modal modal-orientation freelancing-bg grey-text text-lighten-1"
        >
          <div className="modal-content my-modal">
            <h2 className="center-align my-modal-header underline italics">
              Freelancing
            </h2>
            <h4>Mercury Web Scraping</h4>
            <p className="modal-paragraph">
              <br />
              Mercury Scraping is a full stack app with a Python Django
              PostgreSQL stack that I co-developed with a colleage. Public
              sentiment data is something which in modern times is readily
              available on the many social medias that are frequented on a
              regular basis. These sentiments are valuable to certain people,
              especially to those people in the field of journalism, who
              regularly use these sentiments to determine where to head next. It
              is for this reason that this application was developed, it aims to
              dramatically reduce the time that journalists normally have to
              spend manually looking for public sentiment data.
            </p>
            <p className="modal-paragraph">
              The app uses web scrapers to pull data from various social medias
              and perform analytics on it. The web scrapers are able to filter
              out based on the content of the posts, the date of posting,
              whether the post was positive or negative, among other things. The
              social medias that were included in the web scraping were Twitter
              and Reddit. The data and web scrapers were interfaced with the
              application to display information to the client.
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
