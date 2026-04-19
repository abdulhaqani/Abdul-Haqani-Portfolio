import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../scss/home.scss';
import '../scss/default.scss';

export const Home = (props) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });
  let container = `container-cover ${props.darken}`;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={container} id="home-container">
      <div
        ref={ref}
        id="home-intro-container"
        className={`reveal ${isVisible ? 'visible' : ''}`}
      >
        <div id="home-title">Abdul Haqani</div>
        <p id="intro-text">I build full-stack products that ship.</p>

        <p className="paragraph-text">
          From idea to production — I design, build, and deploy web applications
          that solve real problems. Whether you need a custom platform, payment
          integration, or a scalable API, I bring senior-level engineering to
          every project.
        </p>

        <div className="tech-badges">
          <span className="tech-badge">React</span>
          <span className="tech-badge">Node.js</span>
          <span className="tech-badge">AWS</span>
          <span className="tech-badge">Python</span>
          <span className="tech-badge">Go</span>
          <span className="tech-badge">Terraform</span>
          <span className="tech-badge">PostgreSQL</span>
          <span className="tech-badge">MongoDB</span>
        </div>

        <div className="cta-container">
          <button className="cta-primary" onClick={() => scrollTo('contact')}>
            Let's Work Together
          </button>
          <button
            className="cta-secondary"
            onClick={() => scrollTo('services')}
          >
            View Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
