import React from "react";
import AllPosts from "./components/AllPosts";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-purple-900 w-full px-12 py-20">
      <Header />
      <AllPosts />
    </div>
  );
};

export default App;
