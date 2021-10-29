import React, { Fragment } from "react";
import classes from "./Header.module.css"
import mainImage from "../../assets/meals.jpg"
import HeaderButton from "./HeaderButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>FoodFest!</h1>
                <HeaderButton onClick={props.onClick} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mainImage} alt="Delicious food"/>
            </div>
        </Fragment>
    )
}

export default Header