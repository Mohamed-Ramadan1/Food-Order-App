import React from "react";
import styels from './HeaderCarttButton.module.css';  
import CartIcon from "../Cart/CartIcon";
const HeaderCarttButton = props => {

    return (
        <button className={ styels.button} onClick={props.onClick}>
            <span  className={styels.icon} ><CartIcon/></span>
            
            <span>{props.children}</span>

            <span className={styels.badge}>3</span>
        </button>
    )
}

export default HeaderCarttButton;