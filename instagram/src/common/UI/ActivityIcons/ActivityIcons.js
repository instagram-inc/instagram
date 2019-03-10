import React from 'react';
import HeartEmpty from '../../../immages/HeartEmpty.png';
import HeartFull from '../../../immages/HeartFull.png';
import Comment from '../../../immages/Comment.png';
import SaveEmpty from '../../../immages/SaveEmpty.png';
import SaveFull from '../../../immages/SaveFull.png';
import './ActivityIcons.css';
import { toggleLiked, toggleSaved } from './actions/actions'
import { connect } from 'react-redux';


class ActivityIcons extends React.Component {

    onToggleLiked = () => {
        const pid = this.props.pid;
        const uid = this.props.uid;
        const status = { pid, uid };
        this.props.onToggleLiked(status);
    }
    onToggleSaved = () => {
        const pid = this.props.pid;
        const uid = this.props.uid;
        const status = { pid, uid };
        this.props.onToggleSaved(status);
    }
    
    render() {
        const currentUser = this.props.users.find(user => user.uid === this.props.currentUserUid);
        let landscapePostStyle = null;
        if (this.props.landscapePostStyle){
            landscapePostStyle = this.props.landscapePostStyle;
        }
        let heart = HeartEmpty;
        if (currentUser.likedPosts.some(post => post.uid === this.props.uid && post.pid === this.props.pid)) {
            heart = HeartFull;
        }
        
        let save = SaveEmpty;
        if (currentUser.savedPosts.some(post => post.uid === this.props.uid && post.pid === this.props.pid)) {
            save = SaveFull;
        }
        
        const usersWhoLikedThisPost = this.props.users.map(user => {
            if (user.likedPosts.some(post => post.uid === this.props.uid && post.pid === this.props.pid)){
                return user.name;
            }
        }).join(' ');
        const likeMsg = usersWhoLikedThisPost.trim().length ? 'Likes:' : 'Like';

        
        return (
            
            <React.Fragment>
            <div className="grandActivityDiv">
                <div 
                className="activityDiv"
                style={{...landscapePostStyle}}
                >
                    <div className="tooltip">
                    <img
                    className="img"
                    onClick={this.onToggleLiked}
                    src={heart}
                    alt=""
                    >
                    </img>
                    <span className="tooltiptext">{likeMsg}<br />{usersWhoLikedThisPost}</span>
                    </div>

                    <div className="tooltip">
                        <span className="tooltiptext">Comment</span>
                        <img
                        className="img"
                        onClick={this.props.onCommentAreaFocus}
                        src={Comment}
                        alt=""
                        >
                        </img>
                    </div>
                </div>

                
                <div className="tooltip">
                    <span className="tooltiptext">Save</span>
                    <img
                    className="img"
                    onClick={this.onToggleSaved}
                    src={save}
                    alt=""
                    >
                    </img>
                </div>

            </div>
            <p className="likes">{this.props.likes} likes</p>
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onToggleLiked: status => dispatch(toggleLiked(status)),
        onToggleSaved: status => dispatch(toggleSaved(status))
    }
}
const mapStateToProps = (state) => {
    return{    
        users: state.users,
        currentUserUid: state.currentUser.user.uid
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityIcons);
