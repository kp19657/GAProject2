import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? styles.actives : "")}
            >
              Home/Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/french"
              className={(navData) => (navData.isActive ? styles.actives : "")}
            >
              French
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/japanese"
              className={(navData) => (navData.isActive ? styles.actives : "")}
            >
              Japanese
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chinese"
              className={(navData) => (navData.isActive ? styles.actives : "")}
            >
              Chinese
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/indian"
              className={(navData) => (navData.isActive ? styles.actives : "")}
            >
              Indian
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={(navData) => (navData.isActive ? styles.actives : "")}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
