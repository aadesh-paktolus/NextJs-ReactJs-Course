import Styles from "./meal-grid.module.css";
import MealItem from "./meal-item";

const MealGrid = ({ meals }) => {
  return (
    <ul className={Styles.meals}>
      {meals.map((item) => {
        return (
          <li key={item.id}>
            <MealItem mealData={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default MealGrid;
