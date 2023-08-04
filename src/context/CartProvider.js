import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existedItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existedCartItem = state.items[existedItem];

    let updatedItems;

    if (existedCartItem) {
      const updatedItem = {
        ...existedCartItem,
        amount: existedCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existedItem] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

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
