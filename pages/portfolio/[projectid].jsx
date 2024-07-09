import { useRouter } from "next/router";
import React from "react";

const ProjectIdPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query.projectid);
  return <div>Project Id Page </div>;
};

export default ProjectIdPage;
