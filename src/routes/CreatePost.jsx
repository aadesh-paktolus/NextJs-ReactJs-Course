import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import Modal from "../components/Modal";

const CreatePost = () => {
  return (
    <Modal className="bg-white w-1/3 absolute top-1/4 left-1/3 px-5 py-3 flex flex-col items-center rounded-lg">
      <h1 className="p-3 text-lg font-semibold">Add the Details</h1>
      <Form method="post" className="w-full flex flex-col px-5 space-y-5">
        <input
          type="number"
          className="border px-3 py-2 rounded-md outline-none"
          placeholder="enter id*"
          name="userId"
        />
        <input
          type="text"
          className="border px-3 py-2 rounded-md outline-none"
          placeholder="enter name*"
          name="title"
        />
        <input
          type="text"
          className="border px-3 py-2 rounded-md outline-none"
          placeholder="enter profile*"
          name="body"
        />

        <div className="flex items-end justify-end space-x-5">
          <Link
            to="/"
            className="px-7 py-2 text-purple-900 border border-purple-900 rounded-md"
          >
            Cancel
          </Link>
          <button className="bg-purple-400  px-7 py-2 text-white text-base rounded-md">
            Submit
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default CreatePost;

export const action = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
      userId: postData.userId,
    }),
    headers: { "Content-Type": "application/json" },
  });
  return redirect("/");
};
