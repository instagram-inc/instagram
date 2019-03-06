import React from 'react';
import Post from './Post'
import keyGen from '../../keyGen/keyGen';
import { connect } from 'react-redux';

const listOfPosts = props => {
    console.log(props.getUserByUid(1));
    const posts = props.postsList()
    return (
        <React.Fragment >
            {posts.map(post => 
                <Post key={keyGen()} {...post} {...props.getUserByUid(post.uid)} {...props.currentUser}/>)
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    
    return {
        currentUser: state.currentUser,
        postsList: () => {
            if (state.currentUser.user.followedUsers.length !== 0) {
                const users = state.currentUser.user.followedUsers.map(uid => {
                    const currentUser = state.users.find(user => user.uid === uid);
                    if (currentUser) {
                        return currentUser;
                    }
                })
                const posts = [];
                users.forEach(user=> {
                    if (user.posts.length !== 0){
                        user.posts.forEach(post => posts.unshift(post))
                    }
                });
                return posts
            }
        },
        getUserByUid: uid => state.users.find(user => user.uid === uid)

    }
}

export default connect(mapStateToProps, null)(listOfPosts);
