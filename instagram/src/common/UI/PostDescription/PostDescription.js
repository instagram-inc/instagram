import React from 'react';
import classes from './PostDescription.module.css';
import { Link } from 'react-router-dom';

const postDescription = props => 
(<div className={classes.parrentContainer}>
    <div className={classes.nameContainer}>
        <h3 className={classes.name}>
            <Link className={classes.link} to={"/profile/"+props.uid}>
                {props.name}
            </Link>
        </h3>
    </div>
    <div className={classes.descContainer}>
        <p className={classes.desc}>{props.description}</p>
    </div>
</div>)


export default postDescription;
