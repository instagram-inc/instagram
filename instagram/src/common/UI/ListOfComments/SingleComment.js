import React from 'react'
import classes from './SingleComment.module.css'
import { Link } from 'react-router-dom';

const singleComment = props => {
    return (
        <React.Fragment>
            <div className={classes.singleCommentContainer}>
                <div className={classes.nameContainer}>
                    <h3 className={classes.name}>
                        <Link className={classes.link} to={"/profile/"+props.userName.uid}>
                            {props.userName.name}
                        </Link>
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