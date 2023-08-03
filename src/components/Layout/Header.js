import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={logo} alt="MainImage" />
      </div>
    </>
  );
};

export default Header;
