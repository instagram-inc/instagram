import React from 'react';
import classes from './ListOfComments.module.css';
import SingleComment from './SingleComment';

const listOfComments = props => {

    return (
        <div className={classes.container}>
            {(props.comments.length > 0 ) ? 
            (props.comments.sort((com1, com2) => com1.cid - com2.cid )
            .map(comment => <SingleComment key={comment.cid} {...comment}/>)) : null}
        </div>
    );
};

export default listOfComments;