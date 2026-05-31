import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";
import { Outlet } from "react-router-dom";

export default function navBar() {
  return (
    <div>
      <section className="nav-section">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand nav-link">
            EasyNotes
          </Link>

          <ul className="nav-list d-flex align-items-center justify-content-around list-unstyled">
            {/* <li>
              <a className="nav-link" href="#">
                <Link to="/about">About</Link>
              </a>
            </li> */}
            <li className="nav-link">How to Use</li>
            <li className="nav-link contact-us">Contact Us</li>
          </ul>
        </nav>
      </section>
      <Outlet />
    </div>
  );
}
