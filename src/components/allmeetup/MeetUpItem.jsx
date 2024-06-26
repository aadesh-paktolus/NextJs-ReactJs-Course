import React, { useContext } from "react";
import FavouriteContext from "../../store/FavouriteContext";
import Card from "../../ui/Card";
import Styles from "./MeetUpItem.module.css";

const MeetUpItem = ({ item }) => {
  const favouriteContext = useContext(FavouriteContext);

  const isItemFav = favouriteContext.isItemFavouriteHandler(item.id);

  const addFavData = (item) => {
    if (isItemFav) {
      favouriteContext.removeFavouriteHandler(item.id);
    } else {
      favouriteContext.addFavouriteHandler(item);
    }
  };
  return (
    <Card>
      <div className={Styles.item} key={item.id}>
        <div className={Styles.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={Styles.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={Styles.actions}>
          <button onClick={() => addFavData(item)}>
            {isItemFav ? "Remove from Favourite" : "Add To Favourite"}
          </button>
        </div>
      </div>
    </Card>
  );
};

export default MeetUpItem;
