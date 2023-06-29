import React,{useEffect,useState} from "react";

import styles from './AvilableMeals.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";



const AvilableMeals = () => {
    const [meals,setMeals]=useState([])
    useEffect(() => {

        const fetchMeals = async () => {
            const response = await fetch("https://food-order-app-e13f9-default-rtdb.firebaseio.com/meals.json");
            const responseData = await response.json();
            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                })
            }
            setMeals(loadedMeals);
        };
        fetchMeals();
    }, []);

    const mealsList = meals.map(meal => <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description} 
        price={meal.price}
    />)
    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    { mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvilableMeals;