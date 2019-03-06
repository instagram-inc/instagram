import React from 'react';
import classes from './PostPic.module.css'

const postPic = props => {
    
    return (
            <div className={classes.pic} >
                <img src={props.srcPostPic} className={classes.img} alt=""></img>
            </div>
        )    
}

export default postPic