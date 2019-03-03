import React from 'react'
import classes from './SingleComment.module.css'

const singleComment = props => {
    console.log("singlecomment")
    console.log(props)
    return (
        <React.Fragment>
            <div className={classes.singleCommentContainer}>
                <div className={classes.nameContainer}>
                    <h3 className={classes.name}>
                        {props.userName}
                    </h3>
                </div>
                <div className={classes.commentContainer}>
                    <p className={classes.comment} >{props.comment}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default singleComment