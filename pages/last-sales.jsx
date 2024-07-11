import React, { useEffect, useState } from "react";

const LastSales = () => {
  const [salesData, setsalesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //   const { data, error } = useSWR(
  //     "https://nextjs-practice-8a36a-default-rtdb.firebaseio.com/sales.json"
  //   );

  //   useEffect(() => {
  //     if (data) {
  //       const updatedData = [];

  //       for (const key in data) {
  //         updatedData.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }

  //       setsalesData(updatedData);
  //     }
  //   }, [data]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://nextjs-practice-8a36a-default-rtdb.firebaseio.com/sales.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const updatedData = [];

        for (const key in data) {
          updatedData.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setsalesData(updatedData);
        setIsLoading(false);
      });
  }, []);

  //   if (error) {
  //     return <p>Failed to load...</p>;
  //   }

  //   if (!data) {
  //     return <p>Loading...</p>;
  //   }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(salesData);

  return (
    <div>
      <ul>
        {salesData.map(({ id, username, volume }) => (
          <li key={id}>
            {username}: {volume}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastSales;
