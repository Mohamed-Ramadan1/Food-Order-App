import React,{Fragment} from 'react';
import styles from './Header.module.css'
import mealsImage from '../../assets/meals.jpg';
import HeaderCarttButton from './HeaderCarttButtton';

const Header = props => {
    return (
        <Fragment >
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCarttButton>Cart</HeaderCarttButton>
            </header>

            <div className={styles['main-image']}>
                <img
                    src={mealsImage}
                    alt='Meal Image'
                    className={styles['main-image']}
                />
            </div>
    
        </Fragment>
    );
};


export default Header;