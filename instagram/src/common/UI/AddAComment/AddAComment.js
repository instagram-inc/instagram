import React from 'react';
import classes from './AddAComment.module.css';
import { addNewComment } from './actions/actions';

import { connect } from 'react-redux';
import Button from '../Button/Button';


class AddAComment extends React.Component {
    state = {
        newComment: {
            comment : ''
        },
        commentProperties:{
            isPostButtonActive: false,
        }
    }
    setComment = event => {
        const MAX_COMMENT_LENGHT = 300;
        const value = event.target.value;
        const newComment = {...this.state.newComment};
        newComment.comment = value.substring(0,MAX_COMMENT_LENGHT);
        this.setState({
            ...this.state, newComment,  
            commentProperties: this.commentDataChecker(newComment.comment) ? 
            {...this.state.commentProperties, isPostButtonActive:true}
            :
            {...this.state.commentProperties, isPostButtonActive:false}
        })
    }

    commentDataChecker = data =>{
        if (data && typeof data === 'string' && data.trim().length > 0) {
            return true;
        } else {
            return false;
        }

    }

    onAddNewComment = event => {
        event.preventDefault();
        if (this.state.commentProperties.isPostButtonActive) {
            const [lastId] = this.props.comments.sort((com1,com2) => com2.cid - com1.cid);
            const newCommentId = (lastId) ? lastId.cid + 1 : 1;
            let newComment = this.state.newComment.comment.trim();
            let contentToBeAdded = {userId: this.props.userId, newCommentId, newComment, postId: this.props.postId}
            this.props.onAddNewComment(contentToBeAdded);
            this.setState({...this.state,newComment: {...newComment, comment: ''},
            commentProperties: {...this.state.commentProperties, isPostButtonActive:false}})
        }
    }

    render () {
        return (
            <div className={classes.comment}>
                <div className={classes.inputContainer}>
                    <textarea className={classes.input} 
                    onChange={this.setComment}
                    value={this.state.newComment.comment}
                    placeholder="Add a comment..."type="text" />
                </div>
                {/* <button onClick={this.onAddNewComment}>post</button> */}
                <Button 
                isActive={this.state.commentProperties.isPostButtonActive} 
                activeText={'Post'}
                onAdd={event=> this.onAddNewComment(event)}/>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddNewComment: comment => dispatch(addNewComment(comment))
    }
}
   

export default connect(null, mapDispatchToProps)(AddAComment);
