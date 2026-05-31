import React from "react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <nav>
      <ul className={style.header}>
        <li className={style.logo}>
          <div className={style.logo__log}>
            <img src="logo.jpg" alt="" className={style.logo__lmg} />
          </div>
          <div className={style.logo__date}>10 Dec 2023</div>
        </li>
        <li className="welcome">
          <div className={style.welcome__msg}>welcome Pulakesh</div>
          <div className={style.welcome__summary}>
            Here is a summary of our buisness
          </div>
        </li>
        <li className="item">
          <div className="item__logo"></div>
          <div className="item__logo"></div>
        </li>
        <li className={style.user}>
          <div className="user__image--box">
            <img src="me.jpeg" alt="user__img" className={style.user__img} />
          </div>
          <div className={style.user__details}>
            <div className={style.user__details__name}>Pulakesh Malakar</div>
            <div className={style.user__details__email}>
              parthib.malakar@gmail.com
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
