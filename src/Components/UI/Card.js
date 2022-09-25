import React from "react";
import classes from './Card.module.css'
function Card(prop)
{

    // let cardClass={classes.card }+prop.className;, this was case in simple css , but this is module.css, therefor template litrals are used here
    
    return(<div className={`${classes.card} ${prop.className}`}>{prop.children}</div>)
}

export default Card;