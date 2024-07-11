import fs from "fs/promises";
import Link from "next/link";
import path from "path";

function HomePage(props) {
  const { products } = props;
  // console.log(products);
  return (
    <ul>
      {products.map(({ id, title }) => (
        <li key={id}>
          <Link href={`/products/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  // console.log("regenerating page...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length == 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
