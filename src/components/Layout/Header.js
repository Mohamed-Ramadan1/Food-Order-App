import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={logo} alt="MainImage" />
      </div>
    </>
  );
};

export default Header;
