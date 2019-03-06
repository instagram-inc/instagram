import React from 'react';
import ListOfPosts from '../common/UI/Post/ListOfPosts';
import classes from './Home.module.css';
import GreyContainer from '../common/UI/GreyContainer/GreyContainer';

import { connect } from 'react-redux';
import HeaderOfPost from '../common/UI/HeaderOfPost/HeaderOfPost';
import CircleImg from '../common/UI/CircleImg/CircleImg';
import Button from '../common/UI/Button/Button';
import { addAfollowed } from './actions/actions'
import keyGen from '../common/keyGen/keyGen'
import { Link } from 'react-router-dom';


const home = props => {
   
    const UNIT = 'vh'
    const users = props.users();
    const profileProps = {...props.currentUser, circleImgWidth: 50}
    const postsToBeShown = props.currentUser.followedUsers;
return (<div className={classes.home}>
    <section className={classes.posts}>
        {   postsToBeShown.length !== 0 ?
            <ListOfPosts posts={postsToBeShown}/>
            :
            <>
            <h1>test</h1>
            <p>sadfkjhfjksadfhfdjk</p>
            </>
        }
    </section>
    <section className={classes.profileSection}>
        <div className={classes.userProfile} >
            <CircleImg {...profileProps}/>
            <div className={classes.name}>
                <Link className={classes.link} to={"/profile/"+profileProps.uid}>
                    <h1>{profileProps.name}</h1>
                </Link>
            </div>
        </div>
        <GreyContainer title={"Recomended:"}>
        {users
        .map(user => 
            <div key={keyGen()}className={classes.recomendedRow}>
                <HeaderOfPost key={keyGen()}{...user}/>
                <div  className={classes.buttonWraper}>
                    <Button 
                    key={keyGen()}
                    activeText={"Unfollow"} 
                    text={"Follow"}
                    isActive={props.checkFollowerStatus(user.uid)} 
                    onAdd={() => {
                        props.checkFollowerStatus(user.uid) ?
                        props.addAfollowed({status: false, uid : user.uid})
                        :
                        props.addAfollowed({status: true, uid : user.uid})}} 
                    style={{padding:`${0.3 + UNIT} ${3 + UNIT}`}} 
                    />
                </div>
            </div>)
        }
        </GreyContainer>
    </section>
    </div>);
}

const mapStateToProps = (state) => {
    
    return {
        users: () => state.users.filter(user => user.uid !== state.currentUser.user.uid),
        currentUser: state.currentUser.user,
        checkFollowerStatus: uid => state.currentUser.user.followedUsers.some(userId => userId === +uid),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addAfollowed: status => dispatch(addAfollowed(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);
