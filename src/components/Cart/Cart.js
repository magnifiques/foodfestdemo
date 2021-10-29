import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css"
import CartContext from "../store/cart-context";


const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.item.length > 0;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItem = <ul 
    className={classes['cart-items']}>
    {cartCtx.item.map((item) => 
    <li>{<CartItem 
            key={item.id} 
            id={item.id} 
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)} />}</li>)}</ul>

    return (
        <Modal onClick={props.onClick}>
            {cartItem}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClick}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>            
        </Modal>
    )
}

export default Cart
