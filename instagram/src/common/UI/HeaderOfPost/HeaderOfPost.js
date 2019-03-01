import React from 'react';
import classes from './HeaderOfPost.module.css';
import CircleImg from '../CircleImg/CircleImg';


const headerOfPost = props => {
    
    return (
        
        <div className={classes.header}>
            <div className = {classes.content}>
            <CircleImg {...props}
            />
            <div className={classes.nameContainer}>
                <h1 className={classes.name}>{props.name}</h1>
            </div>
            </div>
        </div>
    )
}


export default headerOfPost;