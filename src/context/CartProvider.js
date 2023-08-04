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
    return { items: updatedItems, totalAmount: newTotalAmount };
  }

  if (action.type === "REMOVE") {
    const existedItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existedItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existedItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [{ items, totalAmount }, dispatch] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => dispatch({ type: "ADD", item: item });

  const deleteItemHandler = (id) => dispatch({ type: "REMOVE", id: id });

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
