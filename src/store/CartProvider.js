import React, {useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
        items: [],
        totoalAmount: 0,
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') { 
        const updatedTotalAmount = state.totoalAmount + (action.item.price * action.item.amount);
        
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
        );
        const existCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        
        if (existCartItem) {
            
            const updatedItem = {
                ...existCartItem,
                amount: existCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items]; 
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
    return {
        items: updatedItems,
        totoalAmount:updatedTotalAmount
    };

    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        let updatedTotalAmount = state.totoalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totoalAmount:updatedTotalAmount
        }
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