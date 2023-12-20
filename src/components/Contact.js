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
  const { serviceId, templateId, apiKey, darken } = props;

  // Materialize js initialization
  useEffect(() => {
    M.AutoInit();
  }, []);

  const { name, email, messageContent } = message;

  const onChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  let container = `container-cover ${darken}`;

  console.log('VALUE');
  console.log(serviceId);
  console.log(templateId);
  console.log(apiKey);
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
        console.log(result.text);

        setMessage({
          name: '',
          email: '',
          messageContent: '',
        });
        try {
          M.toast(toastContent);
        } catch (error) {
          console.error('Toast error');
        }
      },
      (error) => {
        console.log(error.text);
        setMessage({
          name: '',
          email: '',
          messageContent: '',
        });
        try {
          M.Toast(errorToast);
        } catch (error) {
          console.error('toast error');
        }
      }
    );
  };

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
        <label htmlFor="name" className="active">
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
        <label htmlFor="email" className="active">
          Email
        </label>

        <textarea
          name="messageContent"
          className="materialize-textarea text-inputs input-edit"
          value={messageContent}
          onChange={onChange}
          required
        />
        <label htmlFor="messageContent" className="active">
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
