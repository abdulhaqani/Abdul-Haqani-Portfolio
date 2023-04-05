import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';

const Experience = () => {
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
            - Developed Full stack e2e applications for the MyQlik team that
            brought various account management tools directly to Qlik customers.
            Applications were developed using AWS serverless architecture, and
            were built on a Reactjs front end, nodejs backend and used a
            DynamoDB no-sql db. Front-end styling was done using material-ui and
            followed new design practices.
            <br />
            - Migrated legacy code that was styled using Antd to use the latest
            material-ui design practices. Implemented lazy-loading to increase
            the speed and reliability of loading front-end components. Also
            implemented many updates including adding region support for the
            latest Qlik regions, updating the view of a customers licenses and
            tenants, as well as updating card styles to match the latest design
            practices.
            <br />
            - Implemented backend optimizations ranging from updating get
            queries in the db to batchget queries to increase backend efficiency
            by a factor of more than 10, to combining multiple queries into 1 to
            lessen the communication overhead. Also implemented many backend API
            lambdas to serve various purposes from internal API endpoints that
            fetch data, to customer management API endpoints, to customer facing
            APIs that interface with our front end Reactjs app.
            <br />- As our team manages everything e2e, I was also tasked with
            working on the analysis and design of applications, upkeep of apps,
            resolving bugs, implementing system tests, maintaining 100% code
            coverage for our unit and component tests, among other things.
            Configured our AWS architecture for new features and lambdas to
            maintain high server reliability and scalability.
          </p>
          <div className="chip-align">
            <div className="chip">ReactJS</div>
            <div className="chip">Node.js </div>
            <div className="chip">AWSServerless</div>
            <div className="chip">ShellScripting</div>
            <div className="chip">DynamoDB</div>
            <div className="chip">Mocha</div>
            <div className="chip">MaterialUi</div>
          </div>
        </div>
        <div className="modal-footer modal-qlik">
          <a
            href="#!"
            className="modal-close white-text waves-effect waves-light waves-grey btn-flat "
          >
            Close
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
            - Developed backend microservices using Golang to serve various
            functions, ranging from payment processing, to funds transfer, to
            global money transfer fulfillments. Implemented jobs which are
            scheduled to run on a set basis, from automatic daily report
            generations to jobs which link and update our legacy MS DB to match
            the new PostgreSQL DB.
            <br />
            - Worked with Visa to implement a new money transfer system which
            uses Visa as the order fulfillment. Worked end to end on this Visa
            project utilizing the visa developer platform. Designed the
            functionality of the Visa onboarding project from end to end,
            managing the scalable architecture, reliability procedures, and
            failsafes to prevent mishaps with customer funds.
            <br />- Developed backend APIs using both Golang and C++ for our
            different private servers. Implemented data encryption using the
            go-jose package to privatize all customer information while
            communicating with our other partners ranging from Visa to simplii.
          </p>
          <div className="chip-align">
            <div className="chip">Golang</div>
            <div className="chip">C++</div>
            <div className="chip">Oracle</div>
            <div className="chip">MSDB</div>
            <div className="chip">PostgreSQL</div>
            <div className="chip">Microservices</div>
          </div>
        </div>
        <div className="modal-footer modal-cibc">
          <a
            href="#!"
            className="modal-close white-text waves-effect waves-light waves-grey btn-flat "
          >
            Close
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
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
