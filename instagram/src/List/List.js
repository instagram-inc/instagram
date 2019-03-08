import React from 'react';
import classes from './List.module.css'
import { connect } from 'react-redux';
import HeaderOfPost from '../common/UI/HeaderOfPost/HeaderOfPost';
import { withRouter } from 'react-router';



const list = props => {
    const RECOMMENDED = 'recommended';
    const RESAULT = 'resault'
    let  users = props.users.filter(user => user.uid !== props.currentUser.uid);
    if (props.requestedUids.length !== 0 && props.match.url.includes(RESAULT)) {
        const requestedUids = props.requestedUids;
        users = requestedUids.map(uid =>props.users.find(user => user.uid === uid));
    } 
   
    if (props.match.url.includes(RECOMMENDED)){
        users = users.filter(user => !props.currentUser.followedUsers.some(uid => uid === user.uid)) 
    }
    
    return(
        <div className={classes.container}>
            {users.map(user => <HeaderOfPost key={user.uid} {...user}/>)}
        </div>
    )



}

const mapStateToProps = (state) => {

    return {
        users: state.users,
        currentUser: state.users.find(user => user.uid === state.currentUser.user.uid),
        requestedUids: state.requestedUids
    };
};

export default connect(mapStateToProps, null)(withRouter(list));

