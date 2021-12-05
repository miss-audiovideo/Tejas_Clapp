import React from "react";
import "./styles/FirstPage.css";
import "animate.css";
import mobile from "./styles/images/mobile.jpg";

const FirstPage = () => {
  return (
    <div className="firstpage">
      <div className="firstpage-left">
        <div className="firstpage-text animate__animated animate__fadeInRight animate__delay-1s animate-slower">
          <h1> Power boost your business with DOSP: 
          <p>A unique and premiere full-service influencer marketing platform for brands and influencers.</p>
</h1>
        </div>
        <div className="firstpage-media">
          <h5 className="animate__animated animate__fadeInRight animate__delay-1s animate-slower">
            Now available on
          </h5>
          <img
            className="firstpage-mediaicons animate__animated animate__fadeInRight animate__delay-1s animate-slower"
            src="https://static.wixstatic.com/media/5333d4_63f937c1b5c24673a94e94551ef5e983~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01/Artboard%203_4x.webp"
            alt=""
          />
          <img
            className="firstpage-mediaicons animate__animated animate__fadeInRight animate__delay-1s animate-slower"
            src="https://static.wixstatic.com/media/5333d4_42a385426e1e46ffb49516141437834f~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01/Artboard%204_4x.webp"
            alt=""
          />
        </div>
      </div>
      <div className="firstpage-right">
        <div className="firstpage-img">
          <img
            src={mobile}
            // src="https://static.wixstatic.com/media/5333d4_ef1eeccbdc284f7387d515ba0840563c~mv2.png/v1/fill/w_1716,h_853,al_c/5333d4_ef1eeccbdc284f7387d515ba0840563c~mv2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
