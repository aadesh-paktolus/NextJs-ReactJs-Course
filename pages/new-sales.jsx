import React from "react";

const NewSales = (props) => {
  console.log(props.data);
  return (
    <div>
      <ul>
        {props.data.map(({ id, username, volume }) => (
          <li key={id}>
            {username}: {volume}
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    "https://nextjs-practice-8a36a-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();

  const updatedData = [];

  for (const key in data) {
    updatedData.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: {
      data: updatedData,
    },
  };
}

export default NewSales;
