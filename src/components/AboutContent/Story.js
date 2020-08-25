import React from 'react';

export const Story = () => {
  return (
    <div>
      <div className="about-me-subheader center-align">
        Developer to the core.
      </div>
      <div className="about-content">
        <div className="about-photo-container">
          <img
            src={require('../../images/linkedIn2.jpg')}
            className="about-photo"
            alt=""
          />
        </div>
        <div className="about-paragraph">
          <p className="about-words">
            My goal is to help individuals and companies with their software
            needs, be it the user experience on their website, the design of
            their applications or consulting on their online persona. In the
            modern age too many businesses suffer from a poor online persona, be
            it their websites or lack thereof. As a consultant and web architect
            my goal is to help businesses and individuals create a professional
            online image for themselves, something that will pay dividends for
            years to come. Having worked in the public sector and in the private
            sector as a Full Stack Developer (Agri-Food Canada and Ciena), Front
            End Engineer (Kinaxis) and a Back End Engineer (IBM), I've gained a
            technical and theoretical skill set which allows me to consult
            others by understanding their current positions and goals. Through
            these skills I can offer advanced, holistic, and relevant solutions.
            Developing an image for yourself and your work is never easy but
            with help it can be. Now you now know a bit about me, but I am still
            eager to get to know you. Feel free to contact me as I love to meet
            interesting people and if you are someone who might be able to
            benefit from my services I encourage you to reach out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
