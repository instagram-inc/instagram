import React from 'react';
import classes from './CircleImg.module.css';
import { Link } from 'react-router-dom';

const circleImg = props => {
    let pic = {backgroundImage : `url("${props.srcProfilePic}")`, 
               width : props.circleImgWidth, 
               height: props.circleImgWidth
    };

    return ( <Link to={"/profile/"+props.uid}>
                <div className={classes.circle} style={pic} />
            </Link>
            );
};


export default circleImg;
