import { getSlugData } from "@/lib/meas-datal";
import Image from "next/image";
import { notFound } from "next/navigation";
import Styles from "./slug.module.css";

const page = ({ params }) => {
  const mealData = getSlugData(params.slug);

  if (!mealData) {
    notFound();
  }
  mealData.instructions = mealData.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.image}>
          <Image src={mealData.image} alt={mealData.title} fill />
        </div>
        <div className={Styles.headerText}>
          <h1>{mealData.title}</h1>
          <p className={Styles.creator}>
            <a href={`mailto:${mealData.creator_email}`}>{mealData.creator}</a>{" "}
          </p>
          <p className={Styles.summary}>{mealData.summary}</p>
        </div>
      </header>
      <main className={Styles.main}>
        <p
          className={Styles.instructions}
          dangerouslySetInnerHTML={{
            __html: mealData.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default page;
