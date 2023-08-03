import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { ...state, items: updatedItems, totalAmount: newTotalAmount };
  }
};

const CartProvider = ({ children }) => {
  const [{ items, totalAmount }, dispatch] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => dispatch({ type: "ADD", item: item });

  const deleteItemHandler = (id) => dispatch({ type: "REMOVE ", id: id });

  const cartContext = {
    items: items,
    totalAmount,
    addItem: addItemToCartHandler,
    removeItem: deleteItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
