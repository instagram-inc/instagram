import React from 'react';
import Post from './Post'
import { connect } from 'react-redux';

const listOfPosts = props => {
    console.log(props)
    return (
        <React.Fragment >
            {props.users[0].posts.map(post => 
                <Post key={post.pid} {...post} {...props.currentUser}/>)
            }
        </React.Fragment>
    )
}

//redux state
const mapStateToProps = (state) => {
    console.log(state)
    return {
        users: state.users,
        currentUser: state.users[0]
        // followedUsers: state.user[0].followedUsers 
    }
}

export default connect(mapStateToProps, null)(listOfPosts);