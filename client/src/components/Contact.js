import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../scss/contact.scss';
import '../scss/home.scss';
import '../scss/default.scss';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

export const Contact = (props) => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    messageContent: '',
  });

  // Materialize js initialization
  useEffect(() => {
    M.AutoInit();
  });

  const { name, email, messageContent } = message;

  const onChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e, message) => {
    e.preventDefault();

    // config request
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const toastContent = {
      html: 'Message Sent',
      classes: 'rounded center-align',
    };

    const errorToast = {
      html: 'Message failed to send',
      classes: 'rounded center-align',
    };
    try {
      await axios.post('/contact', { name, email, messageContent }, config);
      M.toast(toastContent);
    } catch (error) {
      M.toast(errorToast);
    }
    setMessage({
      name: '',
      email: '',
      messageContent: '',
    });
  };
  let container = `container-cover ${props.darken}`;

  return (
    <div id="contact" className={container}>
      <h1 className="header">CONTACT</h1>
      <div>
        <p className="contact-paragraph">
          Speaking with other developers, designers, entrepreneurs and people in
          general is always refreshing. Contact me through this form if you have
          any recomendations, critiques or if you just want to say hello. If you
          are interested in my work, it is all posted on Github and if you wish
          to connect with me, feel free to send me an invitation through
          LinkedIn from the link on my page. If you are interested in working
          together, or in the services / consulting I offer please send me a
          message as I would love to get in touch with you.
        </p>
      </div>
      <form className="contact-form center-align" onSubmit={onSubmit}>
        <div className="form-group input-field input-edit">
          <input
            name="name"
            type="text"
            className="validate text-inputs"
            value={name}
            onChange={onChange}
            required
          />
          <label htmlFor="name" className="active">
            Name
          </label>
        </div>

        <div className="form-group input-field input-edit">
          <input
            name="email"
            type="email"
            className="validate text-inputs"
            value={email}
            onChange={onChange}
            required
          />
          <label htmlFor="email" className="active">
            Email
          </label>
        </div>

        <div className="form-group input-field input-edit">
          <textarea
            name="messageContent"
            className="materialize-textarea text-inputs"
            value={messageContent}
            onChange={onChange}
            required
          ></textarea>
          <label htmlFor="messageContent" className="active">
            Message
          </label>
        </div>

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
