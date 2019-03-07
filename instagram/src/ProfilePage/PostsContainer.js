import React from 'react';
import classes from './PostsContainer.module.css';
import { connect } from 'react-redux';
import SquarePost from './SquarePost';
import keyGen from '../common/keyGen/keyGen'

const postsContainer = props => {

    const userOnScreenId = props.match.params.uid;
    const userOnScreen = props.users.find(user => user.uid === +userOnScreenId);
    let neededPosts = userOnScreen.posts;
    neededPosts = neededPosts.sort( (p1, p2) => p2.pid - p1.pid);

    console.log(neededPosts.length)
    console.log(neededPosts.length % 3)
    return (
        <div className={classes.postsContainer}>
        {neededPosts.map(post => 
                <SquarePost key={keyGen()} {...post} />
        )}
        { (neededPosts.length % 3 === 2 || neededPosts.length === 2) ?
            <div className={classes.post}></div>
        :
            null
        }
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