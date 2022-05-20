import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const Nav = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <img className={styles.logo} src="/images/logo1.jpg" alt="logo" />
        <ul className={styles.nav__ul}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="admin-login">Admin</Link>
          </li>
          {/* <li><Link href="#contact">Contact Us</Link></li>  */}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
