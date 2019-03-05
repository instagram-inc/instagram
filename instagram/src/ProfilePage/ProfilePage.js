import React from 'react';
import classes from './ProfilePage.module.css';
import CircleImg from '../common/UI/CircleImg/CircleImg';
import Button from '../common/UI/Button/Button';
import { setNoLoggedUser } from '../common/UI/Post/actions/actions';
import { connect } from 'react-redux';


const profilePage = props => {
    const userId = props.match.params.uid;
    console.log(props.match.params)
    // const userId = '1';
    const users = props.users;
    console.log(userId)
    const userINeed = users.find(user => user.uid === +userId);
    console.log(props.users);
    console.log(userINeed);
    // console.log('***id***')
    // console.log(props.currentUser.uid)
    // console.log('***id***')
    const profileProps = {...userINeed, circleImgWidth: 150, }
    console.log(profileProps)
    // console.log('***** props *****')
    // console.log(props)
    // console.log('***** props *****')

    return ( <React.Fragment>
        <div className={classes.parrentDiv}>
            <div>
                <CircleImg {...profileProps} />
            </div>
            <div className={classes.container}>
                <div className={classes.nameAndButtonDiv}>
                    <h4 className={classes.userName}><strong>{profileProps.name}</strong></h4>
                    <div className={classes.button}>
                        <Button 
                        isActive={true}
                        activeText={'Log out'}
                        onAdd={() => props.onLogOut()}
                        />
                    </div>
                </div>
                <div className={classes.info}>
                    <span><strong>{profileProps.posts.length}</strong> posts</span>
                    <span><strong>{profileProps.followersOfMe.length}</strong> followers</span>
                    <span><strong>{profileProps.followedUsers.length}</strong> following</span>
                </div>
            </div>
        </div>
</React.Fragment>)
}

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch(setNoLoggedUser())
    }
}

const mapStateToProps = (state) => {
    
    return {
        currentUser: state.currentUser.user,
        users: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(profilePage);