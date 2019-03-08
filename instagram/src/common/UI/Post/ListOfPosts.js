import React from 'react';
import Post from './Post';
import keyGen from '../../keyGen/keyGen';
import { connect } from 'react-redux';

const listOfPosts = props => {
    const posts = (() => {
        if (props.currentUser.followedUsers.length !== 0) {
            const users = props.currentUser.followedUsers.map(uid => props.users.find(user => user.uid === uid));
            const posts = [];
            users.forEach(user=> {
                if (user.posts.length !== 0){
                    user.posts.forEach(post => posts.unshift(post));
                };
            });
            return posts;
        }
    })();

    return (
        <React.Fragment >
            {posts.map(post => 
                <Post key={keyGen()} pid={post.pid} uid={post.uid}/>)
            }
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.users,
        currentUser: state.users.find(user => user.uid === state.currentUser.user.uid),
    };
};

export default connect(mapStateToProps, null)(listOfPosts);
