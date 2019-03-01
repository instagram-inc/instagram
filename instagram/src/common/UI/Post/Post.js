import React from 'react';
import HeaderOfPost from '../HeaderOfPost/HeaderOfPost';
import PostPic from '../PostPic/PostPic';
import Comment from '../Comment/Comment';
import ActivityIcons from '../ActivityIcons/ActivityIcons'
import classes from './Post.module.css'
import { defineCurrentUser } from './actions/actions'
import { connect } from 'react-redux';



const post = props => {
    return (
        <section
        className={classes.post}>
            <HeaderOfPost
            {...props} 
            />
            <PostPic {...props} />
            <ActivityIcons />
            <Comment />
            <button onClick={props.currentUser}>Find currentUser</button>
        </section>

    )

}

const mapDispatchToProps = dispatch => {
    return {
        currentUser: () => dispatch(defineCurrentUser())
    }
}
   

export default connect(null, mapDispatchToProps)(post);

// export default post
