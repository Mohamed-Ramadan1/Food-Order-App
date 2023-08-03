import { useContext } from "react";

import CartIcon from "./CartIcon";
import styls from "./HeaderCarttButton.module.css";
import CartContext from "../../context/cart-context";

const HeaderCartButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={styls.button} onClick={() => onShowCart()}>
      <span className={styls.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styls.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
