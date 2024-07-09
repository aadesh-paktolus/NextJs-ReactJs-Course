import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
