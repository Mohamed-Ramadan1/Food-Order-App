import React,{useContext,useState} from "react";
import styles from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";


const Cart = props => {
    const [isCheackout, setisCheackout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);
    console.log(cartCtx.totoalAmount)
    const totalAmount = `$${cartCtx.totoalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    };
    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    };
    const orderHandler = () => {
        setisCheackout(true)
    };

    const submitOrderHandler =async(userData) => {
        setIsSubmitting(true);
            await fetch("https://food-order-app-e13f9-default-rtdb.firebaseio.com/orders.json", {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderItems: cartCtx.items,
            }),
        });

        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    }

    const cartItems =
        <ul className={styles['cart-items']}>
            {
                cartCtx.items.map(item => <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null,item.id)}
                    onAdd={cartItemAddHandler.bind(null,item)}
                />)
            }
        </ul>
    
    const modalAction = <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
        {hasItems && <button className={styles.button} onClick={orderHandler}>Order</button>}
    </div>;
    

    const cardModalContent =
        <>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheackout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart} />}
            {!isCheackout && modalAction}

        </>;
    
    const isSubmitingOrderData = <p>Sending order data...</p>;
    const didSubmitDataContent = <>
        <p>Successfully sent the order!</p>
        <div className={styles.actions}>
            <button className={styles.button} onClick={props.onHideCart}>Close</button>
        </div>

    
    </>;
    return (
        <Modal onHideCart={props.onHideCart}>
            {!isSubmitting &&!didSubmit&& cardModalContent}
            {isSubmitting && isSubmitingOrderData}
            {!isSubmitting&&didSubmit&&didSubmitDataContent}
        </Modal>
    );
}

export default Cart;

