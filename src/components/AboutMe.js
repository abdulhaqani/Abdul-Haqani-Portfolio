import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

import '../scss/aboutMe.scss';
import '../scss/home.scss';

export const AboutMe = (props) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  let container = `container-cover ${props.darken}`;

  return (
    <div id="about" className={container}>
      <div className="row header-container">
        <div className="header condensed thin">About Me</div>
      </div>
      <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
        <div className="about-fill">
          <div className="about-me-subheader center-align">
            Building at scale.
          </div>
          <div className="about-content">
            <div className="about-photo-container">
              <img
                src={require('../images/side_shot.png')}
                className="about-photo"
                alt="Abdul Haqani"
              />
            </div>
            <div className="about-paragraph">
              <p>
                I'm a Senior Full Stack Software Engineer with experience
                spanning fintech, cloud platforms, and data engineering. I build
                scalable systems, optimize performance, and bring ideas to life
                end to end.
                <br />
                <br />I hold two bachelor's degrees from the University of
                Ottawa — a BSc in Computing Technology and a BASc in Biomedical
                Mechanical Engineering, both with distinction.
              </p>
            </div>
          </div>

          <div className="work-timeline">
            <div className="timeline-item">
              <div>
                <div className="timeline-role">
                  Senior Full Stack Engineer @{' '}
                  <span className="timeline-company">Barracuda Networks</span>
                </div>
                <div className="timeline-dates">2024 - Present</div>
              </div>
            </div>
            <div className="timeline-item">
              <div>
                <div className="timeline-role">
                  Software Engineer @{' '}
                  <span className="timeline-company">Qlik</span>
                </div>
                <div className="timeline-dates">2022 - 2024</div>
              </div>
            </div>
            <div className="timeline-item">
              <div>
                <div className="timeline-role">
                  Senior Software Developer @{' '}
                  <span className="timeline-company">CIBC Capital Markets</span>
                </div>
                <div className="timeline-dates">2020 - 2022</div>
              </div>
            </div>
            <div className="timeline-item">
              <div>
                <div className="timeline-role">
                  Software Developer @{' '}
                  <span className="timeline-company">Statistics Canada</span>
                </div>
                <div className="timeline-dates">2019 - 2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
