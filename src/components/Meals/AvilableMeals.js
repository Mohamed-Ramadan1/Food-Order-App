import styles from "./AvilableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvilableMeals = () => {
  const [mealsData, setMealsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [getError, setGetError] = useState(false);

  useEffect(() => {
    const fetchMealsData = async () => {
      try {
        const result = await fetch(
          "https://meals-food-bf418-default-rtdb.firebaseio.com/meals.json"
        );

        if (!result.ok) {
          throw new Error("Somthing went wrong!!");
        }

        const data = await result.json();

        const loadedMeals = [];
        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            price: data[key].price,
            description: data[key].description,
          });
          setMealsData(loadedMeals);
        }
      } catch (error) {
        setGetError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMealsData();
  }, []);

  if (isLoading) {
    return (
      <section className={styles.MelasLoading}>
        <p>Loading Data.....</p>
      </section>
    );
  }

  if (getError) {
    return (
      <section className={styles.MealsError}>
        <p>{getError}</p>
      </section>
    );
  }

  const mealsList = mealsData.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvilableMeals;
