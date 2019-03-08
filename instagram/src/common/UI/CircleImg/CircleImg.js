import React from 'react';
import classes from './CircleImg.module.css';


const circleImg = props => {
    let pic = {backgroundImage : `url("${props.srcProfilePic}")`, 
               width : props.circleImgWidth, 
               height: props.circleImgWidth};

    return <div className={classes.circle} style={pic} />;
}


export default circleImg;
