import "./NavBar.css";

function NavBar(props) {
  return (
    <ul className="nav-list">
      <li>
        <img src="../img/PaytmLogo.png" className="paytm-logo" alt="hello" />
      </li>
      <li>
        <a className="nav-link" href="'">
          Paytm for Consumer
        </a>
      </li>
      <li>
        <a className="nav-link" href="'">
          Paytm for Buisness
        </a>
      </li>
      <li>
        <a className="nav-link" href="'">
          Investor Relation
        </a>
      </li>
      <li>
        <a className="nav-link" href="'">
          Company
        </a>
      </li>
      <li>
        <a className="nav-link" href="'">
          Career
        </a>
      </li>
      <li className="nav-btn">
        <a className="nav-link btn-nav" href="'">
          Button
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
