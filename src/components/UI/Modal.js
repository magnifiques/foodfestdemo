import React, { Fragment }  from 'react'
import ReactDom from 'react-dom'
import classes from "./Modal.module.css"

const portalElement = document.getElementById("overlays")

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal = (props) => {
    return (
        <Fragment>
        {ReactDom.createPortal(<BackDrop onClick={props.onClick}/>, portalElement)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )}

export default Modal
