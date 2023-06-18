import React, { Fragment } from "react";
import MeaslSummary from "./MealsSummary";
import AvilableMeals from "./AvailableMeals";

const Meals = () => {
    return (
        <Fragment>
            <MeaslSummary />
            <AvilableMeals/>
        </Fragment>

    )
}

export default Meals;