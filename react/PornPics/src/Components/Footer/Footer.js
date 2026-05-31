import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <footer
      className={`footer footer-center p-4 bg-base-300 text-base-content ${style.footer}`}
    >
      <aside>
        <p>Copyright © 2023 - Designed By Pulakesh Malakar</p>
      </aside>
    </footer>
  );
};

export default Footer;
