import React from 'react';
import classes from './GreyContainer.module.css'

const greyContainer = props => {
    return(
        
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>{props.title}</h1>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default greyContainer