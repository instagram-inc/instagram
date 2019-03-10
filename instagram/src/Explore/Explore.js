import React from 'react';
import classes from './Explore.module.css';
import PostsContainer from '../HOC/PostsContainer';
import SquarePost from '../ProfilePage/SquarePost';
import keyGen from '../common/keyGen/keyGen';
import { connect } from 'react-redux';

const explore = props => {

    let allPosts = [];
    props.users.forEach(user => {
        user.posts.forEach(post => {
            allPosts.push(post);
        });
    });
    allPosts = allPosts.sort( (p1, p2) => p2.pid - p1.pid);

    return (
    <React.Fragment>
        <h1 className={classes.title}>*explore*</h1>
        <PostsContainer>
            {allPosts.map(post => 
            <SquarePost key={keyGen()} {...post} />
            )}
        </PostsContainer>
    </React.Fragment>);
};

const mapStateToProps = (state) => {
    
    return {
        currentUser: state.currentUser.user,
        users: state.users
    };
};

export default connect(mapStateToProps, null)(explore);