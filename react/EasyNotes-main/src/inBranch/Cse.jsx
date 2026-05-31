import React from "react";
import Data from "../subjects/Data";
import Card from "../subjects/Card";
import "../css/cse.css";

import Home from "../pages/Home";

const subjectCards = (val) => {
  return <Card imgsrc={val.imgsrc} link={val.link} subName={val.subName} />;
};

export const Cse = () => {
  return (
    <>
      <Home />
      <div className="app-header"></div>
      <div className="cards">{Data.map(subjectCards)}</div>
    </>
  );
};
export default Cse;
