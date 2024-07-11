import fs from "fs/promises";

import path from "path";
import React from "react";

const ProductIdPage = (props) => {
  const { productData } = props;
  console.log(productData);

  if (!productData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{productData.description}</h1>{" "}
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const id = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const productData = data.products.find((item) => item.id === id);

  return {
    props: {
      productData: productData,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } },
      //   { params: { pid: "p2" } },
      //   { params: { pid: "p3" } },
    ],
    fallback: true,
  };
}

export default ProductIdPage;
