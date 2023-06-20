import React,{useContext,useEffect,useState} from "react";
import styels from './HeaderCarttButton.module.css';  
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
const HeaderCarttButton = props => {
    const[btnIshHilighted,setBtnIshHilighted]=useState(false)
    const cartCtx = useContext(CartContext);
    const cartItemsNumber = cartCtx.items.reduce((current, item) => {
        return current + item.amount
    }, 0);

    const { items } = cartCtx;
    const btnClass = `${styels.button} ${btnIshHilighted?styels.bump:""}`;

    useEffect(() => {
        if (items.length === 0) return;

        setBtnIshHilighted(true);
        const timer=setTimeout(() => { setBtnIshHilighted(false) }, 300);
        
        return () => {
            clearTimeout(timer);
        };

    }, [items]);
    return (
        <button className={ btnClass} onClick={props.onClick}>
            <span  className={styels.icon} ><CartIcon/></span>
            
            <span>{props.children}</span>

            <span className={styels.badge}>{cartItemsNumber}</span>
        </button>
    )
}

export default HeaderCarttButton;