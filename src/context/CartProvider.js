import CartContext from "./cart-context";

const CartProvider = ({ children }) => {
  const addItemToCartHandler = (item) => {};
  const deleteItemHandler = (item) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: deleteItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
