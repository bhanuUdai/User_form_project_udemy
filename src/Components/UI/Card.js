import React from "react";
import classes from './Card.module.css'
function Card(prop)
{

    // let cardClass={classes.card }+prop.className;
    
    return(<div className={`${classes.card} ${prop.className}`}>{prop.children}</div>)
}

export default Card;