import React from 'react';
import classes from './Comment.module.css'

class Comment extends React.Component {
    state = {
        newComment: ''
    }

    render () {
        return (
            <div className={classes.comment}>
                <p>test</p>
                <div className={classes.inputContainer}>
                    <textarea className={classes.input} placeholder="Add a comment..."type="text" />
                </div>
            </div>
        )
    }
}

export default Comment;