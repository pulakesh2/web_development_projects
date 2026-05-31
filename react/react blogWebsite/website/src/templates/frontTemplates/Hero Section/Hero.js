import { Link } from "react-router-dom";
import "./Hero.css";
import React from "react";

const HeroSection = () => {
  return (
    <React.Fragment>
      <div className="hero__section">
        <video autoPlay loop>
          <source src="./vid/vid.mp4" type="video/mp4" />
        </video>
        <div className="hero__section--intro">
          <h2 className="hero__section--intro-header u-margin-bottom-sm">
            The power of being a <span className="loser">Loser</span>
          </h2>
          <p className="hero__section--intro-para u-margin-bottom-md">
            Being a loser is not a disease or abnormal behaviour. It is a
            Special power only a loser has.
          </p>
          <Link to={"#"} className="btn">
            Learn More &rarr;
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
