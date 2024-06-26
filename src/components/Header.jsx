import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-4 px-10 flex items-center justify-between border-b">
      <h1 className="text-2xl font-bold text-white">Topic 1</h1>
      <Link
        to="/create-post"
        className="text-white border border-white px-5 py-2 rounded-md text-center"
      >
        New Post
      </Link>
    </div>
  );
};

export default Header;
