import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <ul className="footer__list">
          <li>
            <a className="footer__link" href="'">
              Company
            </a>
          </li>
          <li>
            <a className="footer__link" href="'">
              Contact Us
            </a>
          </li>
          <li>
            <a className="footer__link" href="'">
              Services
            </a>
          </li>
          <li>
            <a className="footer__link" href="'">
              Terms
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__description">
        This page is designed by{" "}
        <a
          href="https://www.instagram.com/pulakesh_malakar/"
          className="footer__link"
        >
          Pulakesh Malakar
        </a>
        , Copyrights &copy; 2023.
      </div>
    </div>
  );
};

export default Footer;
