import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css'
function ErrorModal(prop) {
  return (
    <div className={classes.backdrop}  onClick={prop.onCancel}>
        <Card className={classes.modal}>
      <header className={classes.header}>
        <p>{prop.title}</p>
      </header>
      <div className={classes.content}>
        <p>{prop.content}</p>
      </div>
      <footer className={classes.actions}>
        <Button   onClick={prop.onCancel}>Cancel</Button>
      </footer>
    </Card>
    </div>
    
  );
}

export default ErrorModal;
