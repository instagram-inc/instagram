import React from 'react';
import classes from './GreyContainer.module.css'
import { Link } from 'react-router-dom';

const greyContainer = props => {
    return(
        
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>{props.title}</h1>
                <Link className={classes.link} to={props.to}>
                <p className= {classes.link}>{props.link}</p>
                </Link>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default greyContainer