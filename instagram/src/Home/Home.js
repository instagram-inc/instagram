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
    // Wellcome pic is shown to all new users. The pic src must be from CDN in oreder to load fast!
    const WELLCOMEPIC = 'https://cdn.gsmarena.com/imgroot/news/18/03/instagram-timeline-changes/-728/gsmarena_001.jpg';
    const WELLCOMEPIC_ALT = 'Image depicting the instagram logo';
    const UNIT = 'vh'
    const users = props.users();
    const currentUser = props.getUserByUid(props.currentUserUid)
    const profileProps = {...currentUser, circleImgWidth: 50}
    const postsToBeShown = currentUser.followedUsers;
    console.log(currentUser)
return (<div className={classes.home}>
    <section className={classes.posts}>
        {   postsToBeShown.length !== 0 ?
            <ListOfPosts posts={postsToBeShown}/>
            :
            <>
            <div className={classes.wellcome}>
                <img className={classes.wellcomePic}
                src={WELLCOMEPIC}
                alt= {WELLCOMEPIC_ALT}
                />
            </div>
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
        currentUserUid: state.currentUser.user.uid,
        checkFollowerStatus: uid => state.currentUser.user.followedUsers.some(userId => userId === +uid),
        getUserByUid: uid => state.users.find(user => user.uid === uid)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addAfollowed: status => dispatch(addAfollowed(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);
