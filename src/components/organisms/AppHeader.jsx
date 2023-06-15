import React from "react";

import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";

import styles from "./AppHeader.module.css";

export default function AppHeader(props) {
  return (
    <div className={styles.AppHeader}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} className="responsive" alt="" />
        </Link>
      </div>
      <div className={styles.menu}>
        <i onClick={() => props.setOpen(true)} className="fa fa-bars"></i>
      </div>
    </div>
  );
}
