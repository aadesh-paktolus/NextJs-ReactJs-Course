import { useRouter } from "next/router";
import React from "react";

const ClientProjectId = () => {
  const router = useRouter();

  console.log(router.query);
  return <div>Client Project Id</div>;
};

export default ClientProjectId;
