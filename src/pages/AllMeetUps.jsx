import React, { useEffect, useState } from "react";
import MeetUpLists from "../components/allmeetup/MeetUpLists";

const AllMeetUps = () => {
  const [allMeetUpsData, setAllMeetUpsData] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-refresher-2nd-module-default-rtdb.firebaseio.com/newMeetUpData.json"
    )
      .then((resp) => resp.json())
      .then((data) => {
        const meetupData = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetupData.push(meetup);
        }
        setAllMeetUpsData(meetupData);
      });
  }, []);

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetUpLists allMeetUpsData={allMeetUpsData} />
    </div>
  );
};

export default AllMeetUps;
