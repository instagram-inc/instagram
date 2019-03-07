import React from 'react';
import classes from './ExploreContainer.module.css';
import SquarePost from '../ProfilePage/SquarePost';
import keyGen from '../common/keyGen/keyGen'

const exploreContainer = props => {

    let allPosts = [];
    props.users.forEach(user => {
        user.posts.forEach(post => {
            allPosts.push(post);
        });
    });
    allPosts = allPosts.sort( (p1, p2) => p2.pid - p1.pid);
    console.log('allPosts : ');
    console.log(allPosts);

    return (
        <div className={classes.exploreContainer}>
        {allPosts.map(post => 
        <SquarePost key={keyGen()} {...post} />
        )}
        </div>
    )
}

export default exploreContainer;