import React from 'react';
import classes from './ProfilePage.module.css';
import CircleImg from '../common/UI/CircleImg/CircleImg';
import Button from '../common/UI/Button/Button';
import { setNoLoggedUser } from '../common/UI/Post/actions/actions';
import { addAfollowed } from '../Home/actions/actions';
import { connect } from 'react-redux';
import PostsContainer from '../HOC/PostsContainer';
import SquarePost from './SquarePost';
import keyGen from '../common/keyGen/keyGen';
import { Link } from 'react-router-dom';

class ProfilePage extends React.Component {

    state = {
        isSavedClicked: false,
        isSavedActive: true,
        isOwnActive: false
    }
    setOwnPosts = () => {
        this.setState({ ...this.state, isSavedClicked : false, isOwnActive: false, isSavedActive: true })
    }
    setSavedPosts = () => {
        this.setState({ ...this.state, isSavedClicked : true, isSavedActive: false, isOwnActive: true })
    }

    render() {
        const UNIT = 'vh';
        const ADMIN_UID = 0;

        const userId = this.props.match.params.uid;
        const isAdmin = (+userId === ADMIN_UID) ? true : false;
        const isCurrentUser = (+userId === this.props.currentUser.uid) ? true : false;
        const users = this.props.users;
        const userINeed = users.find(user => user.uid === +userId);
        const profileProps = {...userINeed, circleImgWidth: 150, }
        const currentUser = this.props.users.find(user => user.uid === this.props.currentUserUid);
        let ownPosts = userINeed.posts;
        ownPosts = ownPosts.sort((p1, p2) => p2.pid - p1.pid);
        let savedPosts = currentUser.savedPosts;
        savedPosts = savedPosts.map(postInfo => {
            const user = this.props.users.find(user => user.uid === postInfo.uid);
            const post = user.posts.find(post => post.pid === postInfo.pid);
            return post;
        });
        console.log('INFO SAVED POST AND ISSAVED ----------')
        console.log(savedPosts)
        console.log(this.state.isSavedClicked)
        console.log('CURENT USER')
        console.log(userINeed)
        

        const checkFollowerStatus = () => this.props.currentUser.followedUsers.some(id => id === +userId);

        return ( <React.Fragment>
            <div className={classes.parrentDiv}>
                <div>
                    <CircleImg {...profileProps} />
                </div>
                <div className={classes.container}>
                    <div className={classes.nameAndButtonDiv}>
                        <h4 className={classes.userName}><strong>{profileProps.name}</strong></h4>
                        <div className={classes.button}>
                            {(profileProps.uid === this.props.currentUser.uid) ?
                                <Button 
                                isActive={true}
                                activeText={'Log out'}
                                onAdd={() => this.props.onLogOut()}
                                style={{padding:`${1 + UNIT} ${6 + UNIT}`}}
                                />
                            :
                                (isAdmin) ?
                                    <Button 
                                    activeText={"Unfollow"} 
                                    text={"Follow"}
                                    isActive={checkFollowerStatus()} 
                                    style={{padding:`${1 + UNIT} ${6 + UNIT}`}}
                                    onAdd={() => {
                                        checkFollowerStatus() ?
                                        this.props.onAddAfollowed({status: false, uid : profileProps.uid})
                                        :
                                        this.props.onAddAfollowed({status: true, uid : profileProps.uid})}} 
                                    />
                                :
                                    null
                            }
                        </div>
                    </div>
                    {!isAdmin ?
                        <div className={classes.info}>
                            <span><strong>{profileProps.posts.length}</strong> posts</span>
                            <span><strong>{profileProps.followersOfMe.length}</strong> followers</span>
                            <span><strong>{profileProps.followedUsers.length}</strong> following</span>
                        </div>
                    :
                        null
                    }
                </div>
            </div>

            {(!isAdmin && isCurrentUser) ?
                <div className={classes.buttonsContainer}>
                    <Link to={"/profile/"+userId+"/saved"}>
                        <Button 
                        isActive={this.state.isSavedActive}
                        activeText={'saved posts'}
                        onAdd={() => this.setSavedPosts()}/>
                    </Link>
                    <Link to={"/profile/"+userId}>
                        <Button 
                        isActive={this.state.isOwnActive}
                        activeText={'own posts'}
                        onAdd={() => this.setOwnPosts()}/>
                    </Link>
                </div>
            :
                null
            }

            <PostsContainer>
                {this.state.isSavedClicked ?
                   savedPosts && savedPosts.map(post => <SquarePost key={keyGen()} {...post} />) 
                :
                    ownPosts && ownPosts.map(post => <SquarePost key={keyGen()} {...post} />)
                }
                {(((ownPosts && ownPosts.length % 3 === 2) || (ownPosts && ownPosts.length === 2)) ||
                    ((savedPosts && savedPosts.length % 3 === 2) || (savedPosts && savedPosts.length === 2))) ?
                    <div className={classes.post}></div>
                :
                    null
                }
            </PostsContainer>
        </React.Fragment>)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch(setNoLoggedUser()),
        onAddAfollowed: status => dispatch(addAfollowed(status))
    }
}

const mapStateToProps = (state) => {
    
    return {
        currentUser: state.currentUser.user,
        users: state.users,
        currentUserUid: state.currentUser.user.uid
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
