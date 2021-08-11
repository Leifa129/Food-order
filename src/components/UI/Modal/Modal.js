import React from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const portalElement =  document.getElementById('overlays');

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick}>

    </div>
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
};

function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    );
}

export default Modal;