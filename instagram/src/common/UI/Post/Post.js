import React from 'react';
import HeaderOfPost from '../HeaderOfPost/HeaderOfPost';
import PostPic from '../PostPic/PostPic';
import Comment from '../Comment/Comment'
import classes from './Post.module.css'

const post = props => {
    return (
        <section className={classes.post}>
            <HeaderOfPost 
            srcProfilePic={"https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} 
            circleImgWidth={30} 
            />
            <PostPic srcPostPic={"http://www.artludnica.com/userfiles/productimages/product_3399.jpg"} />
            <Comment />
        </section>

    )

}

export default post