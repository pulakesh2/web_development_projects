import React from "react";

const Table = (props) => {
  return (
    <li>
      <div className="collapse bg-base-200">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          {props.title}
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>{props.description}</p>
        </div>
      </div>
    </li>
  );
};

export default Table;
