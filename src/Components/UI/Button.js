import React from "react";
import classes from './Button.module.css'

function Button(prop)
{
    return(<div>
        <button className={classes.button} type={prop.type || 'button'} onClick={prop.onClick}>{prop.children}</button>
    </div>)
}

export default Button