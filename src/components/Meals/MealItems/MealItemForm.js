import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";

const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount =  amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setAmountIsValid(false);
            return;
        }
        setAmountIsValid(true)
        props.onAddToCart(enteredAmountNum);
    }
    return (
        <div>
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
            ref={amountInputRef}
            label="amount"
            input={{
                id: 'amount_' + props.id,
                type: 'text',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please Enter the valid amount</p>}
        </form>
        </div>
    )
}

export default MealItemForm
