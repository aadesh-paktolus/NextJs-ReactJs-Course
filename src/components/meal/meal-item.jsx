import Image from "next/image";
import Link from "next/link";

import Styles from "./meal-item.module.css";

export default function MealItem({ mealData }) {
  return (
    <article className={Styles.meal}>
      <header>
        <div className={Styles.image}>
          <Image src={mealData.image} alt={mealData.title} fill />
        </div>
        <div className={Styles.headerText}>
          <h2>{mealData.title}</h2>
          <p>{mealData.creator}</p>
        </div>
      </header>
      <div className={Styles.content}>
        <p className={Styles.summary}>{mealData.summary}</p>
        <div className={Styles.actions}>
          <Link href={`/meal/${mealData.slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
