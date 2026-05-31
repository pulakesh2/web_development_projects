import React from "react";
import style from "./../Navbar/Navbar.module.css";
import { useParams } from "react-router";

const Navbar = () => {
  const params = useParams();
  return (
    <div className={`${style.navbar} bg-base-100 ${style.navbar__margin}`}>
      <div className={`${style.logo} normal-case text-xl text-center`}>
        {params.id.slice(1)}
      </div>
    </div>
  );
};

export default Navbar;
