import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-box">
        <img src="img/logo.png" className="header__logo" alt="netflix__logo" />
      </div>
      <div className="header__login">
        <a href="./login" className="btn">
          Log In
        </a>
      </div>
    </div>
  );
};

export default Header;
