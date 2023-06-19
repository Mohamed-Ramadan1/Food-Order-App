import React from "react";
import styles from './MealItemForm.module.css'
import Input from "../../UI/Input";

const MealItemForm = props => {
    return (
        <form className={styles.form} >
            <Input/>
        
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;