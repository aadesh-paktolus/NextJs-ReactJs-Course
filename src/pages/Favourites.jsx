import React, { useContext } from "react";
import MeetUpLists from "../components/allmeetup/MeetUpLists";
import FavouriteContext from "../store/FavouriteContext";

const Favourites = () => {
  const favouriteContext = useContext(FavouriteContext);

  let content;
  if (favouriteContext.totalFavourites === 0) {
    content = (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>There is nothing in Favourites</p>
        <p>Please add Something to Favourite</p>
      </div>
    );
  } else {
    content = <MeetUpLists allMeetUpsData={favouriteContext.favoutites} />;
  }

  return (
    <div>
      <h1>Favourites</h1>
      {content}
    </div>
  );
};

export default Favourites;
