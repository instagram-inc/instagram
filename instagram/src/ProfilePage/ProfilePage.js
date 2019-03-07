import React from 'react';
import classes from './ProfilePage.module.css';
import CircleImg from '../common/UI/CircleImg/CircleImg';
import Button from '../common/UI/Button/Button';
import { setNoLoggedUser } from '../common/UI/Post/actions/actions';
import { addAfollowed } from '../Home/actions/actions';
import { connect } from 'react-redux';
import PostsContainer from './PostsContainer';


const profilePage = props => {
    const UNIT = 'vh';

    const userId = props.match.params.uid;
    const users = props.users;
    const userINeed = users.find(user => user.uid === +userId);
    const profileProps = {...userINeed, circleImgWidth: 150, }

    const checkFollowerStatus = () => props.currentUser.followedUsers.some(id => id === +userId);

    return ( <React.Fragment>
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
                            <Button 
                            activeText={"Unfollow"} 
                            text={"Follow"}
                            isActive={checkFollowerStatus()} 
                            style={{padding:`${1 + UNIT} ${6 + UNIT}`}}
                            onAdd={() => {
                                checkFollowerStatus() ?
                                props.onAddAfollowed({status: false, uid : profileProps.uid})
                                :
                                props.onAddAfollowed({status: true, uid : profileProps.uid})}} 
                            />
                        }
                    </div>
                </div>
                <div className={classes.info}>
                    <span><strong>{profileProps.posts.length}</strong> posts</span>
                    <span><strong>{profileProps.followersOfMe.length}</strong> followers</span>
                    <span><strong>{profileProps.followedUsers.length}</strong> following</span>
                </div>
            </div>
        </div>

        <PostsContainer {...props} />
</React.Fragment>)
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
        users: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(profilePage);