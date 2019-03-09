import React from 'react';
import classes from './List.module.css'
import { connect } from 'react-redux';
import HeaderOfPost from '../common/UI/HeaderOfPost/HeaderOfPost';
import { withRouter } from 'react-router';
import error from '../immages/error.png'


const list = props => {
    const RECOMMENDED = 'recommended';
    const RESAULT = 'resault'
    let admin = props.currentUser.uid === 0 ? true : false;
    let  users = props.users.filter(user => user.uid !== props.currentUser.uid);
    let searchError = true;
    if (props.requestedUids.length !== 0 && props.match.url.includes(RESAULT)) {
        const requestedUids = props.requestedUids;
        users = requestedUids.map(uid =>props.users.find(user => user.uid === uid));
        searchError = false;
    }
   
    if (props.match.url.includes(RECOMMENDED)){
        users = users.filter(user => !props.currentUser.followedUsers.some(uid => uid === user.uid))
        searchError = false;
    }
    if (admin) {
        searchError = false;
    }
    
    return(
        <div className={classes.container}>
            {searchError ?
                <div>
                    <h1>Sorry, We Couldn't Find That Page</h1>
                    <img src={ error } alt=""/>
                </div>
            :
                users.map(user => <HeaderOfPost key={user.uid} {...user}/>)
            }

        </div>
    )



}

const mapStateToProps = (state) => {
    const ADMIN_UID = 0;
    return {
        users: state.users.filter(user => user.uid !== ADMIN_UID),
        currentUser: state.users.find(user => user.uid === state.currentUser.user.uid),
        requestedUids: state.requestedUids
    };
};

export default connect(mapStateToProps, null)(withRouter(list));

