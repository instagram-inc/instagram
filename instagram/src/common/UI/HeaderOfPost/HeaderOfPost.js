import React from 'react';
import classes from './HeaderOfPost.module.css';
import CircleImg from '../CircleImg/CircleImg';

const headerOfPost = (props) => {
    return (
        
        <div className={classes.header}>
            <div className = {classes.content}>
            <CircleImg src={props.srcProfilePic} 
            width = {props.circleImgWidth}/>
            <div className={classes.nameContainer}>
                <h1 className={classes.name}>tesdfgdft</h1>
            </div>
            </div>
        </div>
    )
}


export default headerOfPost;