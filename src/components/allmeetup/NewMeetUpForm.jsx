import React, { useRef } from "react";
import Card from "../../ui/Card";
import Styles from "./NewMeetUpForm.module.css";

const NewMeetUpForm = ({ addMeetUpHandler }) => {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const titleValue = titleRef.current.value;
    const imageValue = imageRef.current.value;
    const addressValue = addressRef.current.value;
    const descriptionValue = descriptionRef.current.value;

    const NewMeetUpData = {
      title: titleValue,
      image: imageValue,
      address: addressValue,
      description: descriptionValue,
    };
    addMeetUpHandler(NewMeetUpData);
  };
  return (
    <Card>
      <form className={Styles.form} onSubmit={submitHandler}>
        <div className={Styles.control}>
          <label htmlFor="title">MeetUp Title</label>
          <input type="text" id="title" required ref={titleRef} />
        </div>

        <div className={Styles.control}>
          <label htmlFor="image">MeetUp Image</label>
          <input type="url" id="image" required ref={imageRef} />
        </div>

        <div className={Styles.control}>
          <label htmlFor="address">MeetUp Address</label>
          <input type="text" id="address" required ref={addressRef} />
        </div>

        <div className={Styles.control}>
          <label htmlFor="description">MeetUp Description</label>
          <textarea id="description" rows={5} required ref={descriptionRef} />
        </div>

        <div className={Styles.actions}>
          <button>Add Meet Up</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetUpForm;
