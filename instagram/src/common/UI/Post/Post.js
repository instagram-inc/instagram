import React from 'react';
import HeaderOfPost from '../HeaderOfPost/HeaderOfPost';
import PostPic from '../PostPic/PostPic';
import Comment from '../Comment/Comment';
import ActivityIcons from '../ActivityIcons/ActivityIcons'
import classes from './Post.module.css'



const post = props => {
    return (
        <section
        className={classes.post}>
            <HeaderOfPost
            {...props} 
            />
            <PostPic {...props} />
            <ActivityIcons />
            <Comment />
        </section>

    )

}

export default post
