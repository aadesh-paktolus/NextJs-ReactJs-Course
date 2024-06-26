import React from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const PostDetails = () => {
  const postDetails = useLoaderData();
  return (
    <Modal>
      <h1 className="font-bold text-xl">{postDetails.title}</h1>
      <h3 className="font-normal text-base">{postDetails.body}</h3>
    </Modal>
  );
};

export default PostDetails;

export const loader = async ({ params }) => {
  const response = await fetch("https://dummyjson.com/posts/" + params.id);
  const respData = response.json();
  return respData;
};
