import CartIcon from "./CartIcon";
import styls from "./HeaderCarttButton.module.css";
const HeaderCartButton = ({ onShowCart }) => {
  return (
    <button className={styls.button} onClick={() => onShowCart()}>
      <span className={styls.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styls.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
