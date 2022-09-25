import React from "react";
import classes from './Button.module.css'

function Button(prop)
{
    return(<div>
        <button className={classes.button} type={prop.type || 'button'} onClick={prop.onClick}>{prop.children}</button>
    </div>)
}

export default Button

// for type, prop.type means type which will be given where this component is added will work , if not given "button" will be default type
// for  onClick  onClick of place where this component used will work