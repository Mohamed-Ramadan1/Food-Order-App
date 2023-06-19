import CartContext  from "./cart-context";
const CartPorvider = props => {

    const addItemHandler = (item) => { }
    
    const removeItemHandler = (id) => { }
    
    const cartContext = {
        items: [],
        totoalAmount: 0,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartPorvider;