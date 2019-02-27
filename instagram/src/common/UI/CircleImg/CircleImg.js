import React from 'react';
import classes from './CircleImg.module.css';


const circleImg = props => {
    let pic = {backgroundImage : `url("${props.src}")`, 
               width : props.width, 
               height: props.width};

    return (
        <div 
        className={classes.circle} 
        style={pic}
        >

        </div>
    )
}

export default circleImg