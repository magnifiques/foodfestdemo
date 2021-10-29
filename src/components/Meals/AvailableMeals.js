import React from "react";
import classes from "./AvailableMeals.module.css"
import Card from "../UI/Card"
import MealItem from "./MealItems/MealItem";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Spaghetti',
      description: 'An Italian Appetite!',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Ramen',
      description: 'A combination of Japanese noodles and veges.',
      price: 29.99,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {

    const mealList = DUMMY_MEALS.map((meal, index) => <li>
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price} />
    </li>)
    
    return (
        <section className={classes.meals}>
            <Card>
            <ul>{mealList}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeals
