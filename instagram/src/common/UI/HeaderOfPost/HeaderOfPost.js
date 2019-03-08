import React from 'react';
import classes from './HeaderOfPost.module.css';
import CircleImg from '../CircleImg/CircleImg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import { deleteUser } from './actions';
import { deletePost } from './actions';
import { withRouter } from 'react-router';


const headerOfPost = props => {
    const isAdmin = props.currentUser.uid === 0 ? true : false;
    const isPostForDel = props.location.pathname.includes('post');
    const url = props.location.pathname.split('post/');
    const pid = +url[1];
    
    const ondeletePost = (uid, pid) => {
        props.history.goBack();
        props.ondeletePost(uid, pid);
    }

    return (
        
        <div className={classes.header}>
            <div className = {classes.content}>
            <CircleImg {...props}
            />
                <div className={classes.nameContainer}>
                    <h1 className={classes.name}>
                        <Link className={classes.link} to={"/profile/"+props.uid}>
                        {props.name}
                        </Link>
                    </h1>
                </div>
            </div>
            {isAdmin ?
                isPostForDel ?
                    <div className={classes.deleteButton}>
                        <Button
                        isActive={true}
                        activeText={'delete post'}
                        onAdd={() => ondeletePost(props.uid, pid)}/>
                    </div>
                :
                    <div className={classes.deleteButton}>
                        <Button
                        isActive={true}
                        activeText={'delete user'}
                        onAdd={() => props.ondeleteUser(props.uid)}/>
                    </div>
            :
                null
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        ondeleteUser: uid => dispatch(deleteUser(uid)),
        ondeletePost: (uid, pid) => dispatch(deletePost(uid, pid))
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser.user
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(headerOfPost));