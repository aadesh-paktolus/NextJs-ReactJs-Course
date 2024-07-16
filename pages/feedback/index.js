import { useState } from "react";
import { extractFileData, extractFilePath } from "../api/feedback";

const FeedbackPage = (props) => {
  const [feedbackItemData, setfeedbackItemData] = useState({});
  const loadFeedbackData = (id) => {
    fetch(`/api/feedback/${id}`)
      .then((resp) => resp.json())
      .then((data) => setfeedbackItemData(data.feedback));
  };
  return (
    <div>
      <h1>Feedback Items</h1>
      {feedbackItemData && <p>{feedbackItemData.email}</p>}
      <ul>
        {props.feedbackItem.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => loadFeedbackData(item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackPage;

export async function getStaticProps() {
  const filepath = extractFilePath();
  const data = extractFileData(filepath);
  return {
    props: {
      feedbackItem: data,
    },
  };
}
