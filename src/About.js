import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="top">
        <div className="About-img">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/06/03/56/phone-2588517_960_720.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="about-typo">
        <div className="about-heading">
          <h1>About us</h1>
        </div>
        <div className="about-para">
          <p>
            Clapp is a first-of-its-kind seamless platform where businesses from
            a vast array of industries can have access to a range of PR &
            marketing services all the while forming an exclusive
            fully-digitized members-only elite community in parallel, where
            influencers, media personalities, and other invited members can
            benefit from exclusive perks & benefits in exchange for coverage or
            other case-by-case requirements.
          </p>
          <p>
            Resembling today’s fast-paced & on-demand PR & marketing needs,
            Clapp is an application which follows a typically barter-based
            business model allowing business to benefit from reducing overall
            in-house PR and marketing spending whilst getting greater ROI.
            Businesses will be able to track the coverage, exposure, and
            engagement they receive through the platform via user-friendly
            interactive interfaces, whilst influencers and members will be able
            to track the value of the redemptions they’ve made as well as the
            savings they’ve achieved by utilizing Clapp’s exclusive perks &
            benefits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
