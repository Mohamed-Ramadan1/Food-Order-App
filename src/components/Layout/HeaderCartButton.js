import { useContext, useEffect, useState } from "react";

import CartIcon from "./CartIcon";
import styls from "./HeaderCarttButton.module.css";
import CartContext from "../../context/cart-context";

const HeaderCartButton = ({ onShowCart }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const classes = `${styls.button} ${btnIsHighlighted ? styls.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={classes} onClick={() => onShowCart()}>
      <span className={styls.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styls.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
