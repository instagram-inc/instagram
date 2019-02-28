import React from 'react';
import classes from './PostPic.module.css'

const postPic = props => {
    // let pic = {backgroundImage : `url("${props.srcPostPic}")`}
    
    return (
            <div className={classes.pic} >
                <img src={props.srcPostPic} className={classes.img} alt=""></img>
            </div>
        )    
}

export default postPic