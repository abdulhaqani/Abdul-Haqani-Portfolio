import React, { useState } from 'react';
import '../scss/contact.scss';
import '../scss/default.scss';

export const Contact = () => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    messageContent: '',
  });

  const { name, email, messageContent } = message;

  const onChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Message submit');
  };

  return (
    <div className="contact-background">
      <div>
        <h1 className="header">CONTACT</h1>
        <div>
          <p className="contact-paragraph">
            Speaking with other developers, designers, entrepreneurs and people
            in general is always refreshing. Contact me through this form if you
            have any recomendations, critiques or if you just want to say hello.
            If you are interested in my work, it is all posted on Github and if
            you wish to connect with me, feel free to send me an invitation
            through LinkedIn. If you are interested in working together or in
            the services I offer please send me a message as I would love to get
            in touch with you.
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
    </div>
  );
};

export default Contact;
