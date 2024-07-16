import { useRef, useState } from "react";

function HomePage() {
  const [feedBackItems, setfeedBackItems] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch("/api/feedback", {
      method: "Post",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  const loadFeedback = () => {
    fetch("api/feedback")
      .then((resp) => resp.json())
      .then((data) => setfeedBackItems(data.feedback));
  };

  return (
    <div>
      <h1>The Home Page</h1>

      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="email">Your Email: </label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>

        <div>
          <label htmlFor="feedback">Your Feedback: </label>
          <textarea
            type="email"
            id="feedback"
            rows={5}
            ref={feedbackInputRef}
          />
        </div>
        <button>Submit</button>
      </form>

      <hr />
      <button onClick={loadFeedback}>Load Feedback</button>

      <ul>
        {feedBackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
