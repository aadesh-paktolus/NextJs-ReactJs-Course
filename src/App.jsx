import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetUps from "./pages/AllMeetUps";
import Favourites from "./pages/Favourites";
import NewMeetUps from "./pages/NewMeetUps";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetUps />} />
          <Route path="/new-meetups" element={<NewMeetUps />} />
          <Route path="/favourite" element={<Favourites />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
