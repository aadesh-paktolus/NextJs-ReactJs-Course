import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const AllPosts = () => {
  const { posts } = useLoaderData();

  return (
    <>
      <div className="flex flex-wrap space-x-14 py-3">
        <div></div>
        {posts.map((item) => {
          return (
            <Post
              key={item.id}
              name={item.title}
              profile={item.body.slice(0, 30)}
              id={item.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default AllPosts;
