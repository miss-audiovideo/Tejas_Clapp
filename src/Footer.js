import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer animate__animated animate__fadeIn animate__delay-1s animate-slower">
      <div className="footer-left">
        <h1>Clapp</h1>
      </div>
      <div className="footer-center">
        <ul>
          <li>©2021 clapp </li>
          <li> | Privacy policy </li>
          <li> | Terms And Conditions </li>
          <li> | Subsidiary of investium LTD </li>
        </ul>
        <ul>
          <center>
            <img
              className="footer-branding"
              src="https://static.wixstatic.com/media/5333d4_ae4b4a79d879473f99dc15cfd8b0945d~mv2.png/v1/fill/w_220,h_50,al_c,lg_1,q_85/Mastercard---visa.webp"
              alt=""
            />
          </center>
        </ul>
      </div>
      <div className="footer-right">
        <div className="right-pics">
          <img
            src="https://static.wixstatic.com/media/71ac09a5a92848cc943bf2ca2a09a6d0.png/v1/fill/w_38,h_38,al_c,q_85,usm_0.66_1.00_0.01/71ac09a5a92848cc943bf2ca2a09a6d0.webp"
            alt=""
          />
          <img
            src="https://static.wixstatic.com/media/fdcfaba150fc427da298a00cb09d91c1.png/v1/fill/w_38,h_38,al_c,q_85,usm_0.66_1.00_0.01/fdcfaba150fc427da298a00cb09d91c1.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
