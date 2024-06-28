import MealGrid from "@/components/meal/meal-grid";
import { getMealsData } from "@/lib/meas-datal";
import Link from "next/link";
import { Suspense } from "react";
import Styles from "./meals-main-page.module.css";

const MealsDataLoading = async () => {
  const mealsData = await getMealsData();
  return <MealGrid meals={mealsData} />;
};

const MealsMainPage = () => {
  return (
    <>
      <header className={Styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={Styles.highlight}>by you </span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={Styles.cta}>
          <Link href="/meal/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={Styles.main}>
        <Suspense
          fallback={<div className={Styles.loading}>Fetching Data...</div>}
        >
          <MealsDataLoading />
        </Suspense>
      </main>
    </>
  );
};

export default MealsMainPage;
