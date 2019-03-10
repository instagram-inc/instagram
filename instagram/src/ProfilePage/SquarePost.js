import React from 'react';
import classes from './SquarePost.module.css';
import WhiteHeart from '../immages/WhiteHeart.png';
import WhiteComment from '../immages/WhiteComment.png';
import { Link } from 'react-router-dom';

class SquarePost extends React.Component {

    state = {
        hover : false
    }
    onMouseEnter = () => {
        this.setState({ hover: true });
    }
    onMouseLeave = () => {
        this.setState({ hover: false });
    }

    render() {
        let isHover = false;
        if(this.state.hover === true) {
            isHover = true;
        };

        const postStyleOn = {
            backgroundImage: `url('${this.props.srcPostPic}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            WebkitFilter: 'brightness(50%)'
        };
        
        const postStyleOff = {
            backgroundImage: `url('${this.props.srcPostPic}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            WebkitFilter: 'brightness(100%)'
        };

        return (
            <div className={classes.post}
            style={ (isHover) ?
                {...postStyleOn}
            :
                {...postStyleOff}
            }
            onMouseEnter={this.onMouseEnter} 
            onMouseLeave={this.onMouseLeave}
            >
            <div>
                {(isHover) ?
                    <Link className={classes.link} to={"/profile/"+this.props.uid+"/post/"+this.props.pid}>
                        <div className={classes.postHover}>
                            <img src={WhiteHeart} alt="" height='20' />
                            <span>{this.props.likes}</span>
                            <img src={WhiteComment} alt="" height='40' />
                            <span>{this.props.comments && this.props.comments.length}</span>
                        </div>
                    </Link>
                :
                    null
                }
            </div>
            </div>
        );
    };
};

export default SquarePost;