import React, { useContext, useState, useEffect } from "react"
import classes from "./HeaderButton.module.css"
import CartIcon from "./CartIcon"
import CartContext from "../store/cart-context"


const HeaderButton = (props) => {

    const cartctx = useContext(CartContext);
    const [btnHighlights, setBtnHighlights] = useState(false)


    const numberofcartitems = cartctx.item.reduce((curnumber, item) => 
    {return curnumber + item.amount}, 0)
    
    const btnClasses = `${classes.button} ${btnHighlights ? classes.bump : ''}`

    useEffect(() => {
        if(cartctx.item.length === 0) {
            return
        } 
        setBtnHighlights(true);

        const timer = setTimeout(() => {
            setBtnHighlights(false)
        },300)

        return () => {clearTimeout(timer)}
        
    }, [cartctx.item])

    return (
        <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberofcartitems}</span>
       </button>
    )}


export default HeaderButton
