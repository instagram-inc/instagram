import React from 'react';
import classes from './List.module.css'
import { connect } from 'react-redux';
import HeaderOfPost from '../common/UI/HeaderOfPost/HeaderOfPost';
import { withRouter } from 'react-router';
import error from '../immages/error.png'


const list = props => {
    console.log("zcczxc")
    console.log(props)
    const RECOMMENDED = 'recommended';
    const RESAULT = 'resault';
    const FOLLOWERS_OF_ME = 'followersOfMe';
    const FOLLOWED_USERS ='followedUsers'
    let admin = props.currentUser.uid === 0 ? true : false;
    let  users = props.users.filter(user => user.uid !== props.currentUser.uid);
    let searchError = true;
    let title = '';
    if (props.requestedUids.length !== 0 && props.match.url.includes(RESAULT)) {
        const requestedUids = props.requestedUids;
        users = requestedUids.map(uid =>props.users.find(user => user.uid === uid));
        searchError = false;
        title = 'search resault:';
    }
   
    if (props.match.url.includes(RECOMMENDED)){
        users = users.filter(user => !props.currentUser.followedUsers.some(uid => uid === user.uid))
        searchError = false;
        title = 'recommended for you:';
    }
    if (props.match.url.includes(FOLLOWERS_OF_ME)){
        const userOfIntrest = props.users.find(user => user.uid === +props.match.params.uid);
        const name = userOfIntrest.name.toLowerCase();
        users = userOfIntrest.followersOfMe.map(uid => props.users.find(user => user.uid === uid))
        title = 'followers of ' + name + ':';
        title = users.length ? 'followers of ' + name + ':' : name + ' has no followers';
        searchError = false;
    }
    if (props.match.url.includes(FOLLOWED_USERS)){
        const userOfIntrest = props.users.find(user => user.uid === +props.match.params.uid);
        const name = userOfIntrest.name.toLowerCase();
        users = userOfIntrest.followedUsers.map(uid => props.users.find(user => user.uid === uid))
        title = users.length ? 'users that ' + name + ' follows:' : name + ' does not follow anyone';
        searchError = false;
    }
    if (admin) {
        title = 'user database:';
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
            <div>
            <h1 className={classes.title}>{title}</h1>
            {users.map(user => <HeaderOfPost key={user.uid} {...user}/>)}
            </div>
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

