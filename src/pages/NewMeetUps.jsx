import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetUpForm from "../components/allmeetup/NewMeetUpForm";

const NewMeetUps = () => {
  const navigate = useNavigate();
  const addMeetUpHandler = (meetUpData) => {
    fetch(
      "https://react-refresher-2nd-module-default-rtdb.firebaseio.com/newMeetUpData.json",
      {
        method: "POST",
        body: JSON.stringify(meetUpData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => navigate("/"));
  };

  return (
    <div>
      <h1>New Meet Up Form</h1>
      <NewMeetUpForm addMeetUpHandler={addMeetUpHandler} />
    </div>
  );
};

export default NewMeetUps;
