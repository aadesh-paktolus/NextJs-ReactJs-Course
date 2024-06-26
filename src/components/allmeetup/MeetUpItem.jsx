import React from "react";
import Card from "../../ui/Card";
import Styles from "./MeetUpItem.module.css";

const MeetUpItem = ({ allMeetUpsData }) => {
  return (
    <Card>
      {allMeetUpsData.map((item) => {
        return (
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
              <button>Add To Favourite</button>
            </div>
          </div>
        );
      })}
    </Card>
  );
};

export default MeetUpItem;
