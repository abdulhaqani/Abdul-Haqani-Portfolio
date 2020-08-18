import React from 'react';
import '../scss/contact.scss';
import '../scss/default.scss';

export const Contact = () => {
  return (
    <div className="contact-background">
      <div>
        <h1 className="center-align contact-head">CONTACT</h1>
        <div>
          <p className="contact-paragraph center-align">
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
        <div className="form contact-form center-align">
          <div className="input-field input-edit">
            <input
              placeholder="Name"
              id="name"
              type="text"
              className="validate"
            />
            <label for="first_name">Name</label>
          </div>

          <div className="input-field input-edit">
            <input id="email" type="email" className="validate" />
            <label for="email">Email</label>
          </div>

          <div class="input-field input-edit ">
            <textarea id="Message" class="materialize-textarea"></textarea>
            <label for="Message">Message</label>
          </div>
          <button
            class="btn waves-effect waves-light grey darken-1 submit-btn-edit"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
