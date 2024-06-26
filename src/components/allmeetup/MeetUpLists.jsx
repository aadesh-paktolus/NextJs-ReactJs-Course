import React from "react";
import MeetUpItem from "./MeetUpItem";

const MeetUpLists = ({ allMeetUpsData }) => {
  return (
    <div>
      {allMeetUpsData.map((item) => (
        <MeetUpItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default MeetUpLists;
