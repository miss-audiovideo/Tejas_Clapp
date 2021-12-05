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
