import React, { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../scss/works.scss';
import '../scss/home.scss';
import '../scss/default.scss';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

export const Works = (props) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  let container = `container-cover ${props.darken}`;

  useEffect(() => {
    var myModal = document.querySelectorAll('.modal');
    M.Modal.init(myModal, {});
  }, []);

  return (
    <div id="works" className={container}>
      <h1 className="header">Featured Projects</h1>
      <br />

      <div
        ref={ref}
        className={`project-cards reveal-stagger ${isVisible ? 'visible' : ''}`}
      >
        {/* jp7sfootball.com - strongest freelance case study */}
        <div className="project-card">
          <h3 className="project-name">jp7sfootball.com</h3>
          <div className="project-type">Client Project</div>
          <p className="project-impact">
            Built a full-stack registration platform with live Stripe payment
            processing for CFL athlete James Peter's youth football camp.
          </p>
          <p className="project-description">
            End-to-end web application handling camp registration, payment
            processing, and registrant management. The platform gives the client
            full control over communication with registrants and camp logistics.
          </p>
          <div className="project-chips">
            <span className="project-chip">React</span>
            <span className="project-chip">Express</span>
            <span className="project-chip">Material-UI</span>
            <span className="project-chip">Stripe</span>
            <span className="project-chip">MongoDB</span>
          </div>
          <a className="modal-trigger project-link" href="#modal-jp7">
            Read the full story <i className="material-icons" style={{ fontSize: '14px', verticalAlign: 'middle' }}>arrow_forward</i>
          </a>
        </div>

        {/* Koga.world */}
        <div className="project-card">
          <h3 className="project-name">Koga.world</h3>
          <div className="project-type">Client Project</div>
          <p className="project-impact">
            Designed and shipped a responsive React SPA with embedded Spotify
            player for an independent music collective.
          </p>
          <p className="project-description">
            A website that highlights the collective's music through a built-in
            Spotify player, responsive slideshows, and artist profiles —
            strengthening the connection between artists and their fans.
          </p>
          <div className="project-chips">
            <span className="project-chip">React</span>
            <span className="project-chip">Semantic-UI</span>
            <span className="project-chip">Spotify API</span>
            <span className="project-chip">Firebase</span>
          </div>
          <a className="modal-trigger project-link" href="#modal-koga">
            Read the full story <i className="material-icons" style={{ fontSize: '14px', verticalAlign: 'middle' }}>arrow_forward</i>
          </a>
        </div>

        {/* Mercury Scraping */}
        <div className="project-card">
          <h3 className="project-name">Mercury Scraping</h3>
          <div className="project-type">Client Project</div>
          <p className="project-impact">
            Co-developed a sentiment analysis platform that automates public
            opinion data collection from Twitter and Reddit for journalists.
          </p>
          <p className="project-description">
            Dramatically reduces the time journalists spend manually searching
            for public sentiment data. Filters posts by content, date, and
            sentiment polarity to surface the most relevant discussions.
          </p>
          <div className="project-chips">
            <span className="project-chip">Python</span>
            <span className="project-chip">Django</span>
            <span className="project-chip">PostgreSQL</span>
            <span className="project-chip">Web Scraping</span>
          </div>
        </div>
      </div>

      {/* Modals for detailed views */}
      <div id="modal-jp7" className="modal modal-koga modal-orientation">
        <div className="modal-content my-modal grey-text text-lighten-2">
          <h4 className="center-align">jp7sfootball.com</h4>
          <h6 className="italics center-align">Client Project</h6>
          <p className="modal-paragraph">
            JP7s is a youth football camp and showcase started by CFL football
            star James Peter of the Ottawa Redblacks. The platform integrates
            with Stripe to process live payments from registrants, and provides
            Mr. Peter with tools to manage and communicate with camp attendees.
          </p>
          <p className="modal-paragraph">
            Built with a React frontend, Node/Express backend, and MongoDB
            database. The Stripe integration handles the complete payment flow
            from checkout to confirmation, while the admin dashboard gives the
            client full visibility into registrations.
          </p>
          <div className="chip-align">
            <div className="chip">React</div>
            <div className="chip">Express</div>
            <div className="chip">Material-UI</div>
            <div className="chip">Stripe</div>
            <div className="chip">MongoDB</div>
          </div>
        </div>
        <div className="modal-footer modal-koga">
          <a
            href="#!"
            className="modal-close white-text waves-effect waves-light btn-flat"
          >
            Close
          </a>
        </div>
      </div>

      <div id="modal-koga" className="modal modal-koga modal-orientation">
        <div className="modal-content my-modal grey-text text-lighten-2">
          <h4 className="center-align">Koga.world</h4>
          <h6 className="italics center-align">Client Project</h6>
          <p className="modal-paragraph">
            Koga Studios is a music collective that needed a responsive website
            to showcase their identity and music. The site features a built-in
            Spotify player, a responsive slideshow of their latest work, and
            links throughout to find their music across platforms.
          </p>
          <p className="modal-paragraph">
            Built on React with Semantic-UI for styling. Plans include support
            for a merchandise store to allow fans to purchase directly on the
            site.
          </p>
          <div className="chip-align">
            <div className="chip">React</div>
            <div className="chip">Semantic-UI</div>
            <div className="chip">Spotify API</div>
            <div className="chip">Firebase</div>
          </div>
        </div>
        <div className="modal-footer modal-koga">
          <a
            href="#!"
            className="modal-close white-text waves-effect waves-light btn-flat"
          >
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
