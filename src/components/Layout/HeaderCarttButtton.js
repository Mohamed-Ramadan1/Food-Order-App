import React,{useContext} from "react";
import styels from './HeaderCarttButton.module.css';  
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
const HeaderCarttButton = props => {
    const cartCtx = useContext(CartContext);
    const cartItemsNumber = cartCtx.items.reduce((current, item) => {
        return current+item.amount
    },0)
    return (
        <button className={ styels.button} onClick={props.onClick}>
            <span  className={styels.icon} ><CartIcon/></span>
            
            <span>{props.children}</span>

            <span className={styels.badge}>{cartItemsNumber}</span>
        </button>
    )
}

export default HeaderCarttButton;