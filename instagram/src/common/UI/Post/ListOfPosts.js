import React from 'react';
import Post from './Post'
import { connect } from 'react-redux';

const listOfPosts = props => {
    return (
        <React.Fragment >
            {props.posts.map(post => 
                // <Alcohol key={alcohol.id} {...alcohol} />)
                <Post key={post.id} {...post}/>)
            }
        </React.Fragment>
    )
}

//redux state
const mapStateToProps = (state) => {
    console.log(state)
    return {
        posts: state.users[0].posts,
        // followedUsers: state.user[0].followedUsers 
    }
}

export default connect(mapStateToProps, null)(listOfPosts);