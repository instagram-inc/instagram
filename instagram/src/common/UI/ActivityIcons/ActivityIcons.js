import React from 'react';
import HeartEmpty from '../../../immages/HeartEmpty.png';
import HeartFull from '../../../immages/HeartFull.png';
import Comment from '../../../immages/Comment.png';
import Share from '../../../immages/Share.png';
import SaveEmpty from '../../../immages/SaveEmpty.png';
import SaveFull from '../../../immages/SaveFull.png';
import './ActivityIcons.css';
import { toggleLiked } from './actions/actions'
import { connect } from 'react-redux';

class ActivityIcons extends React.Component {
    state = {
        isSaved: false
    }

    toggleSave = () => {
        this.setState({ isSaved : !this.state.isSaved });
    }
    onToggleLiked = () => {
        const pid = this.props.pid;
        const uid = this.props.uid;
        const isThisPostLiked = !this.props.isThisPostLiked;
        const likes = (isThisPostLiked) ? this.props.likes + 1 : this.props.likes - 1;
        const status = {likes, pid, uid, isThisPostLiked};
        this.props.onToggleLiked(status);
    }
    
    render() {
        let heart = HeartEmpty;
        if (this.props.isThisPostLiked) {
            heart = HeartFull;
        }
        
        let save = SaveEmpty;
        if (this.state.isSaved) {
            save = SaveFull;
        }
        console.log(this.props)
        return (
            
            <React.Fragment>
            <div className="grandActivityDiv">
                <div className="activityDiv">
                    <img
                    className="img"
                    // onClick={this.toggleLike}
                    onClick={this.onToggleLiked}
                    src={heart}
                    alt=""
                    >
                    </img>
                    
                    <img
                    className="img"
                    onClick={this.props.onCommentAreaFocus}
                    src={Comment}
                    alt=""
                    >
                    </img>
                    
                    <img
                    className="img"
                    // onClick={}
                    src={Share}
                    alt=""
                    >
                    </img>
                </div>

                <div>
                    <img
                    className="img"
                    onClick={this.toggleSave}
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
        onToggleLiked: status => dispatch(toggleLiked(status))
    }
}

export default connect(null, mapDispatchToProps)(ActivityIcons);

// export default ActivityIcons;