import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../Context/AuthContex";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <div>
      <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={ctx.logOutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
