import React from 'react';

export const Education = () => {
  return (
    <div className="grey-text text-lighten-4">
      <div className="about-me-subheader center-align">
        Eternal Student of the craft.
      </div>
      <div className="education">
        <div className="education-column ">
          <div className="education-header">Formal Education</div>
          <div className="formal-subheader">
            <img
              src={require('../../images/uottawa.png')}
              className="education-logo"
              alt=""
            />
            <div className="content">
              <h6>UNIVERSITY OF OTTAWA</h6>
              <div>
                <div className="italics">Honours BSc. Computing Technology</div>
                Graduated April 2020 <br />
                CGPA: 8/10
              </div>
            </div>
          </div>
          <div className="formal-content">
            <h6>NOTABLE COURSES</h6>
            <div>
              Data Structures and Algorithms <br />
              Discrete Mathematics and Structures <br />
              Operating Systems <br />
              Databases <br />
              Advanced Programming Concepts C++ <br />
              Computer Architecture I/II <br />
              Probability and Statistics for Engineers <br />
              Programming Paradigms <br />
              Operating Systems <br />
              Computational Methods
            </div>
          </div>
        </div>
        <div className="education-column">
          <div className="education-header">Additional Education</div>
          <div className="informal-subheader">
            <img
              src={require('../../images/udemy.png')}
              className="education-logo"
              alt=""
            />
            <div className="content">
              <h6>UDEMY</h6>
              <div>
                <div className="italics">Online Education</div>
                Enrolled in Classes 2017-Present <br />
              </div>
            </div>
          </div>
          <div className="informal-content">
            <h6>NOTABLE COURSES</h6>
            <div>
              The Complete Ruby on Rails Developer Course
              <div className="italics">by Mashrur Hossain</div>
              Node.js, Express & MongoDB Dev to Deployment
              <div className="italics">by Brad Traversy</div>
              React Front to Back
              <div className="italics">by Brad Traversy</div>
              Python Django Dev to Deployment
              <div className="italics">by Brad Traversy</div>
              Basics of GraphQL with Ruby on Rails
              <div className="italics">by Alex Deva</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
