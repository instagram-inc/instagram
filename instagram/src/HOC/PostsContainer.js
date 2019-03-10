import React from 'react';
import classes from './PostsContainer.module.css';

const postsContainer = props => {

    return (
        <div className={classes.postsContainer}>
            {props.children}
        </div>
    );
};

export default postsContainer;