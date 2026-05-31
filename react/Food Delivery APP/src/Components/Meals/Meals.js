import { useContext } from "react";
import DataStore from "../../Context/DataStore";
import MealsList from "./MealsList";
import style from "./Meals.module.css";

const Meals = () => {
  // we use data using context API-->
  const mealData = useContext(DataStore);

  // take the jsx code here-->
  const mealList = mealData.map((el) => (
    <MealsList
      key={Math.random().toString()}
      mealTitle={el.MealTitle}
      mealDesc={el.MealDescription}
      mealAmount={el.MealAmount}
    />
  ));

  return <div className={style.meal__container}>{mealList}</div>;
};

export default Meals;
