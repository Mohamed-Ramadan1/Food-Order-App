import React,{useRef,useState} from  "react";
import styles from './MealItemForm.module.css'
import Input from "../../UI/Input";

const MealItemForm = props => {
    const amounInputRef = useRef()
    const[amountIsValid,setamountIsValid]=useState(true)

    const submitHandler = (event) => {
        event.preventDefault();
        const enterdAmount = amounInputRef.current.value;
        const enterdAmountNumber = +enterdAmount;

        //validation of input amount
        if (enterdAmount.trim().length === 0 ||
            enterdAmountNumber < 1 ||
            enterdAmountNumber > 5
        ) {
            setamountIsValid(false)
            return;
        }
        props.onAddToCart(enterdAmountNumber);
    };


    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amounInputRef}
                label="Amount"
                input={{
                        id: 'amount_' + props.id, 
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1',
                }} />
            <button>+ Add</button>
            {!amountIsValid&& <p>Pleas enter a valid amount (1-5)</p>}
        </form>
    )
}

export default MealItemForm;