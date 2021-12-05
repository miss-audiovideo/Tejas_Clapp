import React from "react";
import "./styles/About.css";
import mobiles from "./styles/images/mobiles.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="top">
        <div className="About-img">
          <img
            src={mobiles}
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
          DOSP is a collabortaion platform exclusively for influencers and brands looking to indulge in bartered collaboration deals. With DOSP, Influencers can earn a percentage of share from sales through conversion, Moreover, influencers can gift their followers with a special discount on their collaboration deals. 

          </p>
          <p>
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
