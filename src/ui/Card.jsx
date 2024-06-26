import React from "react";
import Styles from "./Card.module.css";

const Card = ({ children }) => {
  return <div className={Styles.mainCard}>{children}</div>;
};

export default Card;
