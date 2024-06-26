import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavouriteContext from "../../store/FavouriteContext";
import Styles from "./MainHeader.module.css";

const MainHeader = () => {
  const favrouriteContext = useContext(FavouriteContext);
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
          <div className={Styles.fav_badge}>
            <li>Favourites</li>
            {favrouriteContext.totalFavourites === 0 ? null : (
              <p className={Styles.badge}>
                {favrouriteContext.totalFavourites}
              </p>
            )}
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default MainHeader;
