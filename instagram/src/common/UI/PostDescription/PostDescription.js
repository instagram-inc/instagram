import React from 'react';
import classes from './PostDescription.module.css';

const postDescription = props => 
(<div className={classes.parrentContainer}>
    <div className={classes.nameContainer}>
        <h3 className={classes.name}>
            {props.name}
        </h3>
    </div>
    <div className={classes.descContainer}>
        <p className={classes.desc}>{props.description}</p>
    </div>
</div>)


export default postDescription;
