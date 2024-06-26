import React from "react";
import { Link } from "react-router-dom";
import Styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={Styles.mainDiv}>
      <Link to="/">
        <div className={Styles.logo}>React Refresher</div>
      </Link>
      <ul className={Styles.lists}>
        <Link to="/">
          <li>All Meetups</li>
        </Link>
        <Link to="/new-meetups">
          <li>New Meetups</li>
        </Link>
        <Link to="/favourite">
          <li>Favourites</li>
        </Link>
      </ul>
    </div>
  );
};

export default MainHeader;
