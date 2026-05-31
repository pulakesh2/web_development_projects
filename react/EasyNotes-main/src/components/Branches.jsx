import React from "react";
import { Link } from "react-router-dom";
import "../css/branch.css"


export default function Branch() {
  return (
    <div className="branch-section">
      <div className="container">

          <ul class="branch d-flex align-items-center justify-content-around">
            <li className="">
                ME
            </li>
            <li className="branch-hover" >
            <Link to="/Cse">CSE</Link>
            </li>
            <li className="">
              CE
            </li>
            <li className="">
              EE
            </li>
            <li className="">
              ETE
            </li>
            <li className="">
              ChE
            </li>
            <li className="">
              INS
            </li>
            <li className="">
              IPE
            </li>
          </ul>
          </div>
        </div>


  );
}
