import React from 'react';
import HeaderOfPost from '../HeaderOfPost/HeaderOfPost';
import PostPic from '../PostPic/PostPic';

import ActivityIcons from '../ActivityIcons/ActivityIcons'
import classes from './Post.module.css'
import ListOfComments from '../ListOfComments/ListOfComments';
import AddAComment from '../AddAComment/AddAComment';

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
            <ListOfComments comments={props.comments}/>
            <AddAComment userId={props.uid} postId={props.pid} userName={props.name} comments={props.comments}/>
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
