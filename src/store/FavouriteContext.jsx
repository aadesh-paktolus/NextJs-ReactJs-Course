import { createContext, useState } from "react";

const FavouriteContext = createContext({
  favoutites: [],
  totalFavourites: 0,
  addFavouriteHandler: (data) => {},
  removeFavouriteHandler: (favId) => {},
  isItemFavouriteHandler: (favId) => {},
});

export const FavouriteContextProvider = ({ children }) => {
  const [userFavouritesData, setUerFavouritesData] = useState([]);

  const addFavouriteHandler = (data) => {
    setUerFavouritesData((prevData) => [data, ...prevData]);
  };

  const removeFavouriteHandler = (favId) => {
    const filterData = userFavouritesData.filter((item) => item.id !== favId);
    setUerFavouritesData(filterData);
  };

  const isItemFavouriteHandler = (favId) => {
    return userFavouritesData.some((item) => item.id === favId);
  };

  const context = {
    favoutites: userFavouritesData,
    totalFavourites: userFavouritesData.length,
    addFavouriteHandler,
    removeFavouriteHandler,
    isItemFavouriteHandler,
  };
  return (
    <FavouriteContext.Provider value={context}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContext;
