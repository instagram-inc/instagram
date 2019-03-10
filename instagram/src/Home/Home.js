import React from 'react';
import ListOfPosts from '../common/UI/Post/ListOfPosts';
import classes from './Home.module.css';
import GreyContainer from '../common/UI/GreyContainer/GreyContainer';
import HeaderOfPost from '../common/UI/HeaderOfPost/HeaderOfPost';
import CircleImg from '../common/UI/CircleImg/CircleImg';
import Button from '../common/UI/Button/Button';
import keyGen from '../common/keyGen/keyGen';
import List from '../List/List';
import { addAfollowed } from './actions/actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const home = props => {
    const NUMBER_OF_USERS_TO_RECOMMEND = 3;
    // WELLCOMEPIC is shown to all new users. The pic src must be from CDN in oreder to load fast!
    const WELLCOMEPIC = 'https://cdn.gsmarena.com/imgroot/news/18/03/instagram-timeline-changes/-728/gsmarena_001.jpg';
    const WELLCOMEPIC_ALT = 'Image depicting the instagram logo';
    const shuffle = array => {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    };
    const UNIT = 'vh';
    const ADMIN_UID = 0;
    const isAdmin = props.currentUserUid === 0 ? true : false;
    const currentUser = isAdmin ? 
        props.users.find(user => user.uid === ADMIN_UID) 
    : 
        props.allusers.find(user => user.uid === props.currentUserUid);
    const profileProps = {...currentUser, circleImgWidth: 50};
    
    const postsToBeShown = currentUser.followedUsers;
    const checkFollowerStatus = uid => currentUser.followedUsers.some(userId => userId === +uid);
    const remainingRecommendations = props.filteredUsers
    .filter(user => !currentUser.followedUsers.some(uid => uid === user.uid));
    const recommended = shuffle(remainingRecommendations).slice(0, NUMBER_OF_USERS_TO_RECOMMEND).filter(user => user);
    
    return (
        <div className={classes.home}>
            {!isAdmin ?
                <section className={classes.profileSection}>
                    <div className={classes.userProfile} >
                        <CircleImg {...profileProps}/>
                        <div className={classes.name}>
                            <Link className={classes.link} to={"/profile/"+profileProps.uid}>
                                <h1>{profileProps.name}</h1>
                            </Link>
                        </div>
                    </div>
                    {recommended && recommended.length !== 0 ?
                        <GreyContainer title={"Recommended:"} link={'more'} to={'/list/recommended'}>
                        {recommended.map(user => 
                            <div key={keyGen()}className={classes.recomendedRow}>
                                <HeaderOfPost key={keyGen()}{...user}/>
                                <div  className={classes.buttonWraper}>
                                    <Button 
                                    key={keyGen()}
                                    activeText={"Unfollow"} 
                                    text={"Follow"}
                                    isActive={checkFollowerStatus(user.uid)} 
                                    onAdd={() => {
                                    checkFollowerStatus(user.uid) ?
                                        props.addAfollowed({status: false, uid : user.uid})
                                    :
                                        props.addAfollowed({status: true, uid : user.uid})}} 
                                    style={{padding:`${0.3 + UNIT} ${3 + UNIT}`}} 
                                    />
                                </div>
                            </div>)
                        }
                        </GreyContainer>
                    :
                        <GreyContainer title={"You have no new recommendations!"} 
                        link={''}  to={'/list/recommended'}/>
                    }
                </section>
            :
                null
            }
            <section className={classes.posts}>
                {isAdmin ?
                    <>
                    <div className={classes.adminProfile} >
                        <CircleImg {...profileProps}/>
                        <div className={classes.name}>
                            <Link className={classes.link} to={"/profile/"+profileProps.uid}>
                                <h1>{profileProps.name}</h1>
                            </Link>
                        </div>
                        <span>(advanced options)</span>
                    </div>
                    <List />
                    </>
                :
                    (postsToBeShown.length !== 0) ?
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
        </div>
    );
};

const mapStateToProps = (state) => {
    const ADMIN_UID = 0;
    return {
        filteredUsers: state.users.filter(user => user.uid !== state.currentUser.user.uid 
            && user.uid !== ADMIN_UID), // All users without currently logged and Admin.
        allusers: state.users.filter(user => user.uid !== ADMIN_UID),
        currentUserUid: state.currentUser.user.uid,
        users: state.users
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addAfollowed: status => dispatch(addAfollowed(status))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(home);
