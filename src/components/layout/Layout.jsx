import React from "react";
import Styles from "./Layout.module.css";
import MainHeader from "./MainHeader";

const Layout = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <main className={Styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
