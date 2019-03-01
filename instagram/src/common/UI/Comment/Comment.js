import React from 'react';
import classes from './Comment.module.css'

class Comment extends React.Component {
    state = {
        newComment: {
            user: "",
            comment : ''
        }
    }
    setComment = event => {
        const value = event.target.value;
        const newComment = {...this.state.newComment};
        newComment.comment = value;
        this.setState({newComment})
    }

    render () {
        return (
            <div className={classes.comment}>
                <p>test</p>
                <div className={classes.inputContainer}>
                    <textarea className={classes.input} 
                    onChange={this.setComment}
                    value={this.state.newComment.comment}
                    placeholder="Add a comment..."type="text" />
                </div>
            </div>
        )
    }
}

export default Comment;