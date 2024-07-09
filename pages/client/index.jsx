import { useRouter } from "next/router";
import React from "react";

const ClientPage = () => {
  const router = useRouter();
  const loadProjectA = () => {
    router.push({
      pathname: "/client/[id]/[clientprojectid]",
      query: { id: "aadesh", clientprojectid: "shinde" },
    });
  };

  return (
    <div>
      <h1>Client Page</h1>

      <button onClick={loadProjectA}>What is Project A</button>
    </div>
  );
};

export default ClientPage;
