import React from "react";
import { Outlet } from "react-router-dom";
import App from "../App";

const RouterLayout = () => {
  return (
    <>
      <Outlet />
      <App />
    </>
  );
};

export default RouterLayout;

export const loader = async () => {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  return data;
};
