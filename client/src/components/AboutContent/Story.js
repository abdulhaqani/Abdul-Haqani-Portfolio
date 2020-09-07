import React from 'react';

export const Story = () => {
  return (
    <div className="about-fill">
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
            My goal in the software field is to design and implement solutions
            for individuals and companies, be it user experience solutions for
            companies on their websites or applications, assisting in the design
            of a project, or even consulting to come up with feasible and
            effective solutions for their problems.
            <br />
            <br />
            As a full stack developer, I look to help individuals and businesses
            come up with a web presence that is ideal for their situation,
            something that can stand the test of time and help them for the
            forseeable future. Having obtained meaningful experience as a
            Software Developer at Statistics Canada, I've obtained strong
            technical and design skills which allow me to understand and consult
            others based on their requirements. With these skills I can offer a
            strong, modern skillset that can aid you in developing effective,
            relevant solutions.
            <br />
            <br />
            Understanding how to tackle problems that you face in work and life
            is important, and can also prove to be difficult. However, that can
            be made to be easier with help from qualified individuals. Now that
            you know a little bit about me, I would be happy to hear from you.
            Feel free to contact me as I love hearing from and meeting new
            people, especially when I can obtain different perspectives from
            their experiences. If I can be of benefit through my services, I
            encourage you to reach out. I am always available to listen and
            potentially move forward with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
