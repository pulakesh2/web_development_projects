import React from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  const account = useSelector((store) => store.account);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={`${styles.navItem} ${styles.logo}`}>
          <Link to="/">Logo</Link>
        </li>

        <li className={styles.navItem}>
          <Link to="/contactus">Contact us</Link>
        </li>

        <div className={styles.searchContainer}>
          <SearchBar />
        </div>

        <li className={styles.navItem}>
          {account.name ? (
            <strong>{account.name}</strong>
          ) : (
            <Link to="/createaccount" className={styles.accountLink}>
              Create Account
            </Link>
          )}
        </li>

        {account.name && (
          <li className={styles.navItem}>
            <Link to="/account">Account</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
