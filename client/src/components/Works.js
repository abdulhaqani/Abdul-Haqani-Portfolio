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
        <div className="works-cards">
          <div className="works-class-container grey-text text-lighten-3">
            <h6 className="works-class">Hackathons</h6>
            <hr style={{ width: '90%' }} />
            <br />
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
            <div className="modal-content my-modal grey-text text-lighten-2">
              <h4 className="center-align">EcoSnap</h4>
              <h6 className="italics center-align">Cu Hacking 4</h6>
              <p className="modal-paragraph">
                <br />
                EcoSnap is an android application which ended up winning the
                Jetbrains challenge at the 4th Cu Hacking at Carleton
                University. The technologies and tools used in the application
                include; Kotlin, Android Studio, Python, Keras, Tensorflow,
                Microsoft Azure and Firbase.
              </p>
              <p className="modal-paragraph">
                As of right now, recycling is still the best method for managing
                waste and so we (myself and 2 other team members) developed an
                educational app that encourages the younger generation to
                recycle. The goal of the app is to promote environmental
                awareness by providing an easy way to access information
                regarding the steps needed to recycle different things. The
                application does this by using an AI image recognition system
                that can classify contents in an image, and provide the
                necessary steps required to recycle the contents in question.
                This includes but is not limited to; the steps to recycle
                bottles, cardboard, wood, plastic, batteries, metal etc. A
                leaderboard and user system was also implemented to promote
                recycling, where users who take images of more unique recyclable
                materials are rewarded with points associated to their account
              </p>

              <div className="chip-align">
                <div className="chip">Kotlin</div>
                <div className="chip">Android Studio</div>
                <div className="chip">Python</div>
                <div className="chip">Keras</div>
                <div className="chip">Firebase DB</div>
              </div>

              <div className="modal-images">
                <img
                  src={require('../images/in-app-camera.jpg')}
                  className="modal-image-ecosnap"
                  alt=""
                />
                <img
                  src={require('../images/image-result.jpg')}
                  className="modal-image-ecosnap"
                  alt=""
                />
                <img
                  src={require('../images/recycling-steps.jpg')}
                  className="modal-image-ecosnap"
                  alt=""
                />
                <img
                  src={require('../images/leaderboard.jpg')}
                  className="modal-image-ecosnap"
                  alt=""
                />
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
                    Node.Js | Express | MongoDB | Bootstrap
                    <i className="material-icons right-align right-arrow">
                      keyboard_arrow_right
                    </i>
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div id="modal-bringit" className="modal bring-it modal-orientation">
            <div className="modal-content  my-modal grey-text text-lighten-2">
              <h4 className="center-align">BringIt</h4>
              <h6 className="italics center-align">uOttaHack 3</h6>
              <p className="modal-paragraph">
                <br />
                BringIt is a full stack application developed with a Node.js
                Expressjs MongoDB and ExpressHandlebars stack at uOttawa's 3rd
                hackathon, uOttaHack 3. The application pulled retail
                information from publically available APIs including clothing
                brands, furniture retailers etc, and listed all of their
                products on a unified platform. This combines items for purchase
                from different stores in the region into a single interface for
                purchasing. The application's purpose is to unify the shipping
                services from multiple different retailers in order to level the
                playing field for smaller retailers who are competing with the
                likes of Amazon and other big organizations. Moreover, by
                unifying the delivery from many retailers, it can reduce the
                average delivery time significantly.
              </p>
              <div className="chip-align">
                <div className="chip">Node.js</div>
                <div className="chip">ExpressJs </div>
                <div className="chip">Express Handlebars</div>
                <div className="chip">MongoDB</div>
                <div className="chip">APIs</div>
                <div className="chip">Bootstrap</div>
              </div>
              <div className="modal-images">
                <img
                  src={require('../images/bringIt.jpg')}
                  className="modal-image-bringit"
                  alt=""
                />
                <img
                  src={require('../images/shopping-cart.jpg')}
                  className="modal-image-bringit"
                  alt=""
                />
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
                    Python | Django | PostgreSQL | Bootstrap
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
            <div className="modal-content  my-modal grey-text text-lighten-2">
              <h4 className="center-align">Mercury Scraping</h4>
              <h6 className="italics center-align">Freelance Project</h6>
              <p className="modal-paragraph">
                <br />
                Mercury Scraping is a full stack app with a Python Django
                PostgreSQL stack that I co-developed with a colleage. Public
                sentiment data is something which in modern times is readily
                available on the many social medias that are frequented on a
                regular basis. These sentiments are valuable to certain people,
                especially to those people in the field of journalism, who
                regularly use these sentiments to determine where to head next.
                It is for this reason that this application was developed, it
                aims to dramatically reduce the time that journalists normally
                have to spend manually looking for public sentiment data.
              </p>
              <p className="modal-paragraph">
                The app uses web scrapers to pull data from various social
                medias and perform analytics on it. The web scrapers are able to
                filter out based on the content of the posts, the date of
                posting, whether the post was positive or negative, among other
                things. The social medias that were included in the web scraping
                were Twitter and Reddit. The data and web scrapers were
                interfaced with the application to display information to the
                client.
              </p>
              <p className="modal-paragraph italics">
                Note: images and/or a live version of the application should be
                coming soon, we just need to sort out some things so bear with
                me :)
              </p>
              <div className="chip-align">
                <div className="chip">Python</div>
                <div className="chip">Django </div>
                <div className="chip">PostgreSQL</div>
                <div className="chip">Bootstrap</div>
                <div className="chip">Web Scraping</div>
                <div className="chip">APIs</div>
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
