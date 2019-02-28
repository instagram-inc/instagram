import React from 'react';
import HeartEmpty from '../../../immages/HeartEmpty.png';
import HeartFull from '../../../immages/HeartFull.png';
import Comment from '../../../immages/Comment.png';
import Share from '../../../immages/Share.png';
import SaveEmpty from '../../../immages/SaveEmpty.png';
import SaveFull from '../../../immages/SaveFull.png';
import './ActivityIcons.css';

class ActivityIcons extends React.Component {
    state = {
        isLiked: false,
        isSaved: false
    }

    toggleLike = () => {
        this.setState({ isLiked : !this.state.isLiked });
    }

    toggleSave = () => {
        this.setState({ isSaved : !this.state.isSaved });
    }


    render() {
        let heart = HeartEmpty;
        if (this.state.isLiked) {
            heart = HeartFull;
        }
        
        let save = SaveEmpty;
        if (this.state.isSaved) {
            save = SaveFull;
        }

        return (
            <React.Fragment>
            <div className="grandActivityDiv">
                <div className="activityDiv">
                    <img
                    className="img"
                    onClick={this.toggleLike}
                    src={heart}
                    alt=""
                    >
                    </img>
                    
                    <img
                    className="img"
                    // onClick={}
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
            <p className="likes">126,589 likes / пример за лайкове</p>
            </React.Fragment>
        )
    }
}


export default ActivityIcons;