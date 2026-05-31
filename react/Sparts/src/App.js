import React, { useState } from "react";
import "./index.scss";
import Header from "./Components/header/Header";
import DashBoard from "./Components/dashboard/DashBoard";
import Students from "./Components/students/Students";
import Add from "./Components/addStudents/Add";
import Scehdule from "./Components/Schedule/Scehdule";
import PaymentSummary from "./Components/PaymentSummary/PaymentSummary";
import Growth from "./Components/growth/Growth";
import "./index.scss";

function App() {
  // const dashboard = document.querySelector("page__layout__dashboard__mob");
  const [menuShow, setMenuShow] = useState(true);

  const menuShowingHandler = (e) => {
    console.log(e.target);
    // e.target.innerText === "X"
    //   ? (e.target.innerText = "|||"); setMenuShow(true);
    //   : (e.target.innerText = "X");

    if (e.target.innerText === "|||") {
      e.target.innerText = "X";
      setMenuShow(false);
    } else {
      e.target.innerText = "|||";
      setMenuShow(true);
    }

    // console.log(dashboard);
  };

  //   const dashboard = `<div className="page__layout__dashboard page__layout__dashboard__mob">
  //   ${(<DashBoard />)}
  // </div>`;

  return (
    <div>
      <Header />
      <button className="menu__btn menu__btn__mob" onClick={menuShowingHandler}>
        |||
      </button>
      <div className="page__layout page__layout__mob">
        {menuShow ? (
          <div className="page__layout__dashboard page__layout__dashboard__mob">
            {<DashBoard />}
          </div>
        ) : (
          ""
        )}
        <div className="page__layout__active__students">
          <Students />
        </div>
        <div className="page__layout__add__students">
          <Add />
        </div>
        <div className="page__layout__schedule">
          <Scehdule />
        </div>
        <div className="page__layout__amount__pie">
          <PaymentSummary />
        </div>
        <div className="page__layout__growth">
          <Growth />
        </div>
      </div>
    </div>
  );
}

export default App;
