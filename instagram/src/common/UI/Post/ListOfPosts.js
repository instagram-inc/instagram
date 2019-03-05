import React from 'react';
import Post from './Post'


const listOfPosts = props => {
    console.log('++++++++---------+++dasdasdasd')
    console.log(props)
    return (
        <React.Fragment >
            {props.user.posts.map(post => 
                <Post key={post.pid} {...post} {...props.user}/>)
            }
        </React.Fragment>
    )
}



export default listOfPosts