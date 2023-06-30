import React,{useRef,useState} from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.length !== 5;

const Checkout = (props) => {
    //states
    const [formInputsValidty, setFormInputsValidty] = useState({
        name: true,
        street: true,
        city: true,
        postlCode:true,
    })


    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postelCodeInputRef= useRef();
    const cityInputRef= useRef();

    const confirmHandler = (event) => {
        event.preventDefault();
        const enterdName = nameInputRef.current.value;
        const enterdStreet = streetInputRef.current.value;
        const enterdPostCode = postelCodeInputRef.current.value;
        const enterdCity = cityInputRef.current.value;

        //validate vlaues and input data
        const isEnterdNameValide = !isEmpty(enterdName);
        const isEnterdStreetValid = !isEmpty(enterdStreet);
        const isEnterdCityValid = !isEmpty(enterdCity);
        const isEnterdPostelCodeValid = !isFiveChars(enterdPostCode);

        setFormInputsValidty({
            name: isEnterdNameValide,
            street: isEnterdStreetValid,
            city: isEnterdCityValid,
            postlCode:isEnterdPostelCodeValid,
        })
        
        //Cheack the validty of the whole form
        const formIsValid = isEnterdNameValide
            && isEnterdStreetValid
            && isEnterdPostelCodeValid
            &&isEnterdPostelCodeValid;
        

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enterdName,
            street: enterdStreet,
            city: enterdCity,
            postlCode:enterdPostCode,
        })
    };
    
    return (
        <form className={classes.form} onSubmit={confirmHandler}>
        <div className={`${classes.control} ${formInputsValidty.name?"":classes.invalid}`}>
            <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    ref={nameInputRef}
                />
                {!formInputsValidty.name &&<p >Please enter a valid name!</p>}
        </div>
        <div className={`${classes.control} ${formInputsValidty.street?"":classes.invalid}`}>
            <label htmlFor='street'>Street</label>
                <input
                    type='text'
                    id='street'
                    ref={streetInputRef}
                />
                {!formInputsValidty.street &&<p >Please enter a valid street name!</p>}

        </div>
        <div className={`${classes.control} ${formInputsValidty.postlCode?"":classes.invalid}`}>
            <label htmlFor='postal'>Postal Code</label>
                <input
                    type='text'
                    id='postal'
                    ref={postelCodeInputRef}
                />
                {!formInputsValidty.postlCode &&<p >Please enter a valid Postal Code !</p>}

        </div>
        <div className={`${classes.control} ${formInputsValidty.city?"":classes.invalid}`}>
            <label htmlFor='city'>City</label>
                <input
                    type='text'
                    id='city'
                    ref={cityInputRef}
                />
                {!formInputsValidty.city &&<p >Please enter a Valid City name!</p>}

        </div>
        <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>
            Cancel
            </button>
            <button className={classes.submit}>Confirm</button>
        </div>
        </form>
    );
};

export default Checkout;
