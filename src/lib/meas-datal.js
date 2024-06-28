import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMealsData = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return db.prepare("SELECT * FROM meals").all();
};
