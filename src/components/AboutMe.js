import React from 'react';
import '../scss/aboutMe.scss';

export const AboutMe = () => {
  return (
    <div className="about-me-background center-align">
      <div className="row about-me-header-container">
        <div className="about-me-header condensed thin">About Abdul Haqani</div>
        <div className="about-nav row">
          <a href="#">
            <i class="material-icons about-icons">person</i>
          </a>
          <a href="#">
            <i class="fa fa-graduation-cap about-icons"></i>
          </a>
          <a href="#">
            <i class="fa fa-book about-icons"></i>
          </a>
        </div>
        <div className="about-me-subheader">Developer to the core.</div>
      </div>
      <div>
        <p className="about-paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          animi voluptate nam non porro itaque, officia molestiae earum
          laudantium iusto! Dolor id illo unde aliquid. Voluptatum ab accusamus
          cupiditate asperiores?
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
