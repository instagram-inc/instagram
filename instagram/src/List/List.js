import React from 'react';
import classes from './List.module.css'
import { connect } from 'react-redux';
import HeaderOfPost from '../common/UI/HeaderOfPost/HeaderOfPost';

const list = props => {
    const users = props.users.filter(user => user.uid !== props.currentUser.uid);

    return(
        <div className={classes.container}>
            {users.map(user => <HeaderOfPost key={user.uid} {...user}/>)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        currentUser: state.users.find(user => user.uid === state.currentUser.user.uid),
    };
};

export default connect(mapStateToProps, null)(list);