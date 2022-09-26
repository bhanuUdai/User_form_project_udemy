import React from "react";
import ReactDOM from "react-dom"
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css'

const Backdrop=(prop)=>
{
 return  <div className={classes.backdrop}  onClick={prop.onCancel}/>

//  now onCancel this will be the attribute inside <Backdrop> and there onCancel will be attribute inside <ErrorModa>, whereever it will be used
}
const ModalOverlay=(prop)=>
{
  return( <Card className={classes.modal}>
    <header className={classes.header}>
      <p>{prop.title}</p>
    </header>
    <div className={classes.content}>
      <p>{prop.content}</p>
    </div>
    <footer className={classes.actions}>
      <Button   onClick={prop.onCancel}>Cancel</Button>
    </footer>
  </Card>)
}

function ErrorModal(prop) {
  return (
    <React.Fragment>
       
       {ReactDOM.createPortal(<Backdrop onCancel={prop.onCancel}/>,document.getElementById("backdrop-root"))}
       {/* Place function in JSX */}
        {ReactDOM.createPortal(<ModalOverlay title={prop.title} content={prop.content} onCancel={prop.onCancel}/>,document.getElementById('overlay-root'))}
    </React.Fragment>
  
    
  );
}

export default ErrorModal;
