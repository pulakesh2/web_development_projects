import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header flex flex-mobile">
        <div className="header-logo-box">
          <img src="img/logo.png" alt="header-logo" className="header-logo" />
        </div>
        <ul className="header__list">
          <li className="header__list-item">
            <Link to="/" className="btn btn-text">
              Home
            </Link>
          </li>
          <li className="header__list-item">
            <Link to="/reminder" className="btn btn-text">
              Reminder App
            </Link>
          </li>
          <li className="header__list-item">
            <Link to="/notes" className="btn btn-text">
              Note App
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
