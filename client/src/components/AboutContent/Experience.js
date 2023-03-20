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
      <div className="card card-hover modal-qlik auto-center experience-card">
        <a className="modal-trigger" href="#modal-qlik">
          <div className="card-content white-text center-align waves-effect waves-light experience-card">
            <span className="card-title">Qlik</span>
            <div className="italics">04/20/2022 - Current</div>

            <img
              src={require('../../images/qlik-logo.png')}
              className="qlik-logo"
              alt=""
            />
            <div className="arrow-icon">
              <i className="material-icons right-align right-arrow">
                keyboard_arrow_right
              </i>
              <br />
            </div>
          </div>
        </a>
      </div>
      <div id="modal-qlik" className="modal modal-qlik modal-orientation">
        <div className="modal-content my-modal grey-text text-lighten-2">
          <img
            src={require('../../images/qlik-logo.png')}
            className="qlik-logo2"
            alt=""
          />
          <h4>Software Engineer</h4>
          <h6 className="italics">04/20/2022 - Current</h6>
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
        <div className="modal-footer modal-qlik">
          <a
            href="#!"
            className="modal-close white-text waves-effect waves-light waves-grey btn-flat "
          >
            Agree
          </a>
        </div>
      </div>

      <div className="card card-hover modal-cibc auto-center experience-card">
        <a className="modal-trigger" href="#modal-cibc">
          <div className="card-content white-text center-align waves-effect waves-light experience-card">
            <span className="card-title" style={{ 'font-size': '20px' }}>
              CIBC Capital Markets{' '}
            </span>
            <div className="italics">01/10/2020 - 04/20/2022</div>

            <img
              src={require('../../images/cibc.png')}
              className="cibc-logo"
              alt=""
            />
            <div className="arrow-icon">
              <i className="material-icons right-align right-arrow">
                keyboard_arrow_right
              </i>
              <br />
            </div>
          </div>
        </a>
      </div>

      <div id="modal-cibc" className="modal modal-cibc modal-orientation">
        <div className="modal-content my-modal grey-text text-lighten-2">
          <img
            src={require('../../images/cibc.png')}
            className="cibc-logo2"
            alt=""
          />
          <h4>Senior Software Developer</h4>
          <h6 className="italics">01/10/2020 - 04/20/2022</h6>
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
        <div className="modal-footer modal-cibc">
          <a
            href="#!"
            className="modal-close white-text waves-effect waves-light waves-grey btn-flat "
          >
            Agree
          </a>
        </div>
      </div>

      <div className="card card-hover modal-stats-can auto-center experience-card">
        <a className="modal-trigger" href="#modal-stats-can">
          <div className="card-content white-text center-align waves-effect waves-light experience-card">
            <span className="card-title">Satistics Canada</span>
            <div className="italics">01/01/2019 - 04/30/2020</div>

            <img
              src={require('../../images/canada.png')}
              className="canada-logo"
              alt=""
            />
            <div className="arrow-icon">
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
    </div>
  );
};

export default Experience;
