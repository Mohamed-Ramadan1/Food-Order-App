import React, {useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
        items: [],
        totoalAmount: 0,
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') { 
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totoalAmount + ( action.item.price * action.item.amount);
        
    return {
        items: updatedItems,
        totoalAmount:updatedTotalAmount
    };

    }
    
    if (action.type === 'REMOVE') {

    }
    


    return defaultCartState
}



const CartPorvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item})

    }

    const removeItemHandler = (id) => { 
        dispatchCartAction({ type:'REMOVE',id:id})
    }
    
    const cartContext = {
        items: cartState.items,
        totoalAmount: cartState.totoalAmount,
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