import { useContext } from "react";
import CartContext from "../../../context/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = ({ name, description, price, id }) => {
  const cartContext = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartContext.addItem({ amount, name, description, price, id });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
