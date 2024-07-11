import React from "react";

const UidPage = (props) => {
  return (
    <div>
      <h1>{props.id}</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  //   console.log(params);
  const userId = params.uid;
  return {
    props: {
      id: `User Id- ${userId}`,
    },
  };
}

export default UidPage;
