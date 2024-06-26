import React from "react";
import { Link } from "react-router-dom";

const Post = ({ name, profile, id }) => {
  return (
    <div className="bg-purple-200 rounded-md px-4 py-6 flex flex-col w-1/5 items-start space-y-3 mx-auto mt-5 ">
      <Link to={`/${id}`}>
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="font-normal text-base">{profile}</p>
      </Link>
    </div>
  );
};

export default Post;
