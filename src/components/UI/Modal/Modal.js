import React from "react";
import ReactDom from "react-dom";
import classes from "./modal.module.css";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
const ModalOverlay = (props) => {
  return <div className={classes.overlay}></div>;
};

const ModalBox = (props) => {
  return (
    <React.Fragment>
      <ModalOverlay />
      <div className={classes.modalCard}>
        <IconButton
          aria-label="delete"
          className={classes.modalClose}
          onClick={props.onClose}
        >
          <CancelIcon />
        </IconButton>
        {props.children}
      </div>
    </React.Fragment>
  );
};

const Modal = (props) => {
  return ReactDom.createPortal(
    <ModalBox onClose={props.onClose}>{props.children}</ModalBox>,
    document.getElementById("overlay")
  );
};

export default Modal;
