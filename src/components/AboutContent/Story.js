import React from 'react';

export const Story = () => {
  return (
    <div className="about-fill">
      <div className="about-me-subheader center-align">Building at scale.</div>
      <div className="about-content">
        <div className="about-photo-container">
          <img
            src={require('../../images/linkedIn2.jpg')}
            className="about-photo"
            alt="Abdul Haqani"
          />
        </div>
        <div className="about-paragraph">
          <p>
            I'm a Senior Full Stack Software Engineer at Barracuda Networks,
            where I build and optimize customer-facing data platforms, design
            CI/CD pipelines on AWS, and integrate AI-powered tools using
            Databricks. Before Barracuda, I shipped end-to-end features at Qlik,
            built payment processing systems at CIBC Capital Markets with Visa,
            and developed data science solutions at Statistics Canada.
            <br />
            <br />I hold 2 bachelors degrees from the University of Ottawa — a
            BSc in Computing Technology and a BASc in Biomedical Mechanical
            Engineering, both with distinction. I'm driven by solving complex
            problems across the full stack and I'm always looking to connect
            with others in the field. Feel free to reach out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
