import React from 'react';
import ListOfPosts from '../common/UI/Post/ListOfPosts';
import classes from './Home.module.css';
import GreyContainer from '../common/UI/GreyContainer/GreyContainer';

import { connect } from 'react-redux';
import HeaderOfPost from '../common/UI/HeaderOfPost/HeaderOfPost';
import CircleImg from '../common/UI/CircleImg/CircleImg';


const home = props => {
    console.log("----++++++++++-------")
    console.log(props)
    const profileProps = {...props.currentUser, circleImgWidth: 50}
return (<div className={classes.home}>
    <section className={classes.posts}>
        <ListOfPosts user ={props.currentUser}/>
    </section>
    <section className={classes.profileSection}>
        <div className={classes.userProfile} >
            <CircleImg {...profileProps}/>
            <div className={classes.name}>
                <h1>{profileProps.name}</h1>
            </div>
        </div>
        <GreyContainer title={"Recomended:"}>
        {props.users.filter(user => user.uid !== 1) // филтъра трябва да е спрямо curent  user
        .map(user => 
            <HeaderOfPost key={user.uid}{...user}/>)
        }
        </GreyContainer>
    </section>
    </div>);
}

const mapStateToProps = (state) => {
    
    return {
        users: state.users,
        currentUser: state.currentUser.user
        // followedUsers: state.user[0].followedUsers 
    }
}

export default connect(mapStateToProps, null)(home);
