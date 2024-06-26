import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostDetails, {
  loader as postDetailsLoader,
} from "./components/PostDetails";
import "./index.css";
import CreatePost, { action as postActions } from "./routes/CreatePost";
import RouterLayout, { loader as postLoader } from "./routes/RouterLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    loader: postLoader,
    children: [
      { path: "/create-post", element: <CreatePost />, action: postActions },
      { path: "/:id", element: <PostDetails />, loader: postDetailsLoader },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
