import React from 'react';
import classes from './PostsContainer.module.css';
import { connect } from 'react-redux';
import SquarePost from './SquarePost';

const postsContainer = props => {

    const userOnScreenId = props.match.params.uid;
    const userOnScreen = props.users.find(user => user.uid === +userOnScreenId);
    let neededPosts = userOnScreen.posts;
    neededPosts = neededPosts.sort( (p1, p2) => p2.pid - p1.pid);

    return (
        <div className={classes.postsContainer}>
        {neededPosts.map(post => 
        <SquarePost {...post} />
        )}
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return {
        currentUser: state.currentUser.user,
        users: state.users
    }
}

export default connect(mapStateToProps, null)(postsContainer);