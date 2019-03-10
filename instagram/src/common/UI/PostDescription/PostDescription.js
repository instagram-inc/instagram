import React from 'react';
import classes from './PostDescription.module.css';
import { Link } from 'react-router-dom';

const postDescription = props => {
    let descriptionCss = null;
    if (props.descriptionCss) {
        descriptionCss = props.descriptionCss;
    }
    return(
    <div className={classes.parrentContainer} style={{...descriptionCss}}>
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
    </div>
    );
};

export default postDescription;
