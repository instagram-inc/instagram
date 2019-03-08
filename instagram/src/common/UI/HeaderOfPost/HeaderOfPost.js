import React from 'react';
import classes from './HeaderOfPost.module.css';
import CircleImg from '../CircleImg/CircleImg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import { deleteUser } from './actions';


const headerOfPost = props => {
 
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
            <div className={classes.deleteButton}>
                <Button
                isActive={true}
                activeText={'delete user'}
                onAdd={() => props.ondeleteUser(props.uid)}/>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        ondeleteUser: uid => dispatch(deleteUser(uid))
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser.user,
        isAdmin: state.currentUser.isAdmin
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(headerOfPost);