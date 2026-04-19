import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../scss/contact.scss';
import '../scss/home.scss';
import '../scss/default.scss';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

export const Contact = (props) => {
  const form = useRef();
  const [message, setMessage] = useState({
    name: '',
    email: '',
    messageContent: '',
  });

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const apiKey = process.env.REACT_APP_EMAIL_API_KEY;
  const { darken } = props;

  // Materialize js initialization
  useEffect(() => {
    M.AutoInit();
  }, []);

  const { name, email, messageContent } = message;

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
      <h1 className="header">CONTACT</h1>
      <div>
        <p className="contact-paragraph">
          I'm always happy to connect with fellow engineers, discuss potential
          collaborations, or hear about interesting opportunities. Drop me a
          message below, or find me on GitHub and LinkedIn through the links on
          this page.
        </p>
      </div>
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

        <textarea
          name="messageContent"
          className="materialize-textarea text-inputs input-edit"
          value={messageContent}
          onChange={onChange}
          required
        />
        <label htmlFor="messageContent" className="active label">
          Message
        </label>
        <br />
        <button
          type="submit"
          className="btn waves-effect waves-light grey darken-1 submit-btn-edit"
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default Contact;
