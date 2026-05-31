import React from "react";
import "../styles/DisplayData.css";

const DisplayData = ({ node }) => {
  return (
    <div className="display-data">
      <div>
        {node.checked === true ? (
          <div className="node-name">
            <div className="img__box">
              <img src={node.img__url} alt="not found" className="img" />
            </div>
            <strong className="node-name__designation">
              {node.designation}
            </strong>
            <ul className="node-name__skill">
              <h2 className="skills">skills:</h2>
              {node.skill.length &&
                node.skill.map((el) => {
                  return <li className="skill__item">{el}</li>;
                })}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      {node.children.map((child) => {
        return <DisplayData node={child} />;
      })}
    </div>
  );
};

export default DisplayData;
