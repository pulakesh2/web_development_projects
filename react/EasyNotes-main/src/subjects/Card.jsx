import React from "react";
import "./Card.css";

const Card = (props) => {
  return (

      <div className="card">
        <h2>{props.subName}</h2>
        <div className="image">
          <a href={props.link} target="_blank"  rel="noreferrer" >
            <img src={props.imgsrc} alt=""></img>
          </a>
        </div>

    </div>
  );
};

export default Card;
