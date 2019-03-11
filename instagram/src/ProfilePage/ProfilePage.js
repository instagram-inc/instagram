import React from 'react';
import classes from './ProfilePage.module.css';
import CircleImg from '../common/UI/CircleImg/CircleImg';
import Button from '../common/UI/Button/Button';
import PostsContainer from '../HOC/PostsContainer';
import SquarePost from './SquarePost';
import keyGen from '../common/keyGen/keyGen';
import Ring from '../immages/Ring.png';
import { setNoLoggedUser } from '../common/UI/Post/actions/actions';
import { addAfollowed } from '../Home/actions/actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const profilePage = props => {
 
    const setUrl = url => {
        props.history.push(url);
    };
    const UNIT = 'vh';
    const ADMIN_UID = 0;
    const userId = props.match.params.uid;
    const isAdmin = (+userId === ADMIN_UID) ? true : false;
    const isCurrentUser = (+userId === props.currentUser.uid) ? true : false;
    const users = props.users;
    const userINeed = users.find(user => user.uid === +userId);
    const profileProps = {...userINeed, circleImgWidth: 150, }
    const currentUser = props.users.find(user => user.uid === props.currentUserUid);
    let savedPosts = currentUser.savedPosts;
    let content = [];
    let isButtonActive = true;
    if (props.match.url.includes("saved")){
        content = savedPosts.map(postInfo => {
        const user = props.users.find(user => user.uid === postInfo.uid);
        const post = user.posts.find(post => post.pid === postInfo.pid);
        return post;
        });
    } else {
        isButtonActive = !isButtonActive;
        content = userINeed.posts.sort((p1, p2) => p2.pid - p1.pid);
    }; 
    const checkFollowerStatus = () => props.currentUser.followedUsers.some(id => id === +userId);

    return ( 
        <React.Fragment>
            <div className={classes.parrentDiv}>
                <div>
                    <CircleImg {...profileProps} />
                </div>
                <div className={classes.container}>
                    <div className={classes.nameAndButtonDiv}>
                        <h4 className={classes.userName}><strong>{profileProps.name}</strong></h4>
                        <div className={classes.button}>
                            {(profileProps.uid === props.currentUser.uid) ?
                                <Button 
                                isActive={true}
                                activeText={'Log out'}
                                onAdd={() => props.onLogOut()}
                                style={{padding:`${1 + UNIT} ${6 + UNIT}`}}
                                />
                            :
                                (!isCurrentUser && !props.isCurrentUserAdmin) ?
                                    <Button 
                                    activeText={"Follow"} 
                                    text={"Unfollow"}
                                    isActive={!checkFollowerStatus()} 
                                    style={{padding:`${1 + UNIT} ${6 + UNIT}`}}
                                    onAdd={() => {
                                        checkFollowerStatus() ?
                                        props.onAddAfollowed({status: false, uid : profileProps.uid})
                                        :
                                        props.onAddAfollowed({status: true, uid : profileProps.uid})}} 
                                    />
                                :
                                    null
                            }
                        </div>
                    </div>
                    {!props.isCurrentUserAdmin ?
                        <div className={classes.info}>
                            <span><strong>{profileProps.posts.length}</strong> posts</span>
                            {profileProps.followersOfMe.length ? 
                                <Link className={classes.link} to={"/list/followersOfMe/"+userINeed.uid}>
                                <span><strong>{profileProps.followersOfMe.length}</strong> followers</span>
                                </Link>
                            :
                            <span><strong>{profileProps.followersOfMe.length}</strong> followers</span>
                            }
                            
                            {profileProps.followedUsers.length ? 
                                <Link className={classes.link} to={"/list/followedUsers/"+userINeed.uid}>
                                <span><strong>{profileProps.followedUsers.length}</strong> following</span>
                                </Link>
                            :
                            <span><strong>{profileProps.followedUsers.length}</strong> following</span>
                            }
                        </div>
                    :
                        null
                    }
                </div>
            </div>

            {(!isAdmin && isCurrentUser) ?
                <div className={classes.buttonsContainer}>
                        <Button 
                        isActive={!isButtonActive}
                        activeText={'saved posts'}
                        onAdd={() => setUrl("/profile/"+userId+"/saved")}/>
                        <Button 
                        isActive={isButtonActive}
                        activeText={'own posts'}
                        onAdd={() => setUrl("/profile/"+ userId)}/>              
                </div>
            :
                null
            }

            <PostsContainer>
                {content.map(post => <SquarePost key={keyGen()} {...post} />)}
                {((content && content.length % 3 === 2) || (content && content.length === 2)) ?
                    <div className={classes.post}></div>
                :
                    null
                }
            </PostsContainer>
        </React.Fragment>)
    
}

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch(setNoLoggedUser()),
        onAddAfollowed: status => dispatch(addAfollowed(status))
    };
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser.user,
        users: state.users,
        currentUserUid: state.currentUser.user.uid,
        isCurrentUserAdmin: state.currentUser.isAdmin
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(profilePage);
