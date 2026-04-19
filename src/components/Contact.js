import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../hooks/useScrollReveal';

import '../scss/contact.scss';
import '../scss/home.scss';
import '../scss/default.scss';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

export const Contact = (props) => {
  const form = useRef();
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [message, setMessage] = useState({
    name: '',
    email: '',
    projectType: '',
    messageContent: '',
  });

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const apiKey = process.env.REACT_APP_EMAIL_API_KEY;
  const { darken } = props;

  useEffect(() => {
    M.AutoInit();
  }, []);

  const { name, email, projectType, messageContent } = message;

  const onChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  let container = `container-cover ${darken}`;

  const sendEmail = (e) => {
    e.preventDefault();
    const toastContent = {
      html: 'Message Sent',
      classes: 'rounded center-align',
    };

    const errorToast = {
      html: 'Message failed to send',
      classes: 'rounded center-align',
    };
    emailjs.sendForm(serviceId, templateId, form.current, apiKey).then(
      (result) => {
        setMessage({
          name: '',
          email: '',
          projectType: '',
          messageContent: '',
        });
        try {
          M.toast(toastContent);
        } catch (error) {}
      },
      (error) => {
        setMessage({
          name: '',
          email: '',
          projectType: '',
          messageContent: '',
        });
        try {
          M.Toast(errorToast);
        } catch (error) {}
      }
    );
  };

  return (
    <div id="contact" className={container}>
      <h1 className="header">Let's Work Together</h1>

      <div className="availability-badge">
        <span className="status-dot"></span>
        Available for new projects
      </div>

      <div>
        <p className="contact-paragraph">
          Have a project in mind? Tell me about it and I'll get back to you
          within 24 hours. Whether it's a new web application, an API
          integration, or a full product build — I'd love to hear about it.
        </p>
      </div>

      <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
        <form
          ref={form}
          className="contact-form center-align"
          onSubmit={sendEmail}
        >
          <input
            name="name"
            type="text"
            className="validate text-inputs input-edit"
            value={name}
            onChange={onChange}
            required
          />
          <label htmlFor="name" className="active label">
            Name
          </label>

          <input
            name="email"
            type="email"
            className="validate text-inputs input-edit"
            value={email}
            onChange={onChange}
            required
          />
          <label htmlFor="email" className="active label">
            Email
          </label>

          <div className="project-type-select">
            <select
              name="projectType"
              className="browser-default text-inputs input-edit"
              value={projectType}
              onChange={onChange}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#a0a0b0',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '10px',
                width: '80%',
                margin: '10px auto',
              }}
            >
              <option value="" disabled>
                Project Type
              </option>
              <option value="Web Application">Web Application</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="API / Integration">API / Integration</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <textarea
            name="messageContent"
            className="materialize-textarea text-inputs input-edit"
            value={messageContent}
            onChange={onChange}
            required
          />
          <label htmlFor="messageContent" className="active label">
            Tell me about your project
          </label>
          <br />
          <button
            type="submit"
            className="btn waves-effect waves-light grey darken-1 submit-btn-edit"
          >
            Send Message
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
