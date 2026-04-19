import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../scss/services.scss';

export const Services = (props) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  let container = `container-cover ${props.darken}`;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="services" className={container}>
      <h1 className="header">What I Can Build For You</h1>
      <div
        ref={ref}
        className={`services-grid reveal-stagger ${isVisible ? 'visible' : ''}`}
      >
        <div className="service-card">
          <i className="material-icons service-icon">code</i>
          <h3 className="service-title">Full-Stack Web Apps</h3>
          <p className="service-tech">React, Node.js, Express, Django</p>
          <p className="service-description">
            Custom web applications from concept to deployment. Responsive,
            performant, and built to scale.
          </p>
        </div>

        <div className="service-card">
          <i className="material-icons service-icon">shopping_cart</i>
          <h3 className="service-title">E-Commerce & Payments</h3>
          <p className="service-tech">Stripe, Payment Flows, User Management</p>
          <p className="service-description">
            Complete shopping and checkout experiences with secure payment
            processing and registrant management.
          </p>
        </div>

        <div className="service-card">
          <i className="material-icons service-icon">cloud</i>
          <h3 className="service-title">APIs & Integrations</h3>
          <p className="service-tech">REST APIs, Third-Party APIs, Data Pipelines</p>
          <p className="service-description">
            Connect systems and automate workflows. From Spotify to Stripe, I
            integrate the services your product needs.
          </p>
        </div>

        <div className="service-card">
          <i className="material-icons service-icon">dns</i>
          <h3 className="service-title">Cloud & DevOps</h3>
          <p className="service-tech">AWS, Terraform, CI/CD, Lambda</p>
          <p className="service-description">
            Infrastructure that scales with your business. Automated deployments,
            serverless architecture, and monitoring.
          </p>
        </div>
      </div>

      <div className="services-cta">
        <p className="services-cta-text">Have a project in mind?</p>
        <button className="cta-primary" onClick={() => scrollTo('contact')}>
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default Services;
