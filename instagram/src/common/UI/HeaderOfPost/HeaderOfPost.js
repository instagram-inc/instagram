import React from 'react';
import classes from './HeaderOfPost.module.css';
import CircleImg from '../CircleImg/CircleImg';
import { Link } from 'react-router-dom';


const headerOfPost = props => {
    return (
        
        <div className={classes.header}>
            <div className = {classes.content}>
            <CircleImg {...props}
            />
                <div className={classes.nameContainer}>
                    <h1 className={classes.name}>
                        <Link className={classes.link} to={"/profile/"+props.uid}>
                        {props.name}
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    )
}


export default headerOfPost;