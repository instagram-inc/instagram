import React from 'react';
import classes from './SquarePost.module.css';
import WhiteHeart from '../immages/WhiteHeart.png';
import WhiteComment from '../immages/WhiteComment.png';

class SquarePost extends React.Component {

    state = {
        hover : false
    }
    onMouseEnter = () => {
        // console.log('Hover');
        this.setState({ hover: true });
    }
    onMouseLeave = () => {
        // console.log('not hover')
        this.setState({ hover: false });
    }

    render() {
        let isHover = false;
        if(this.state.hover === true) {
            isHover = true;
        }
        // console.log('props:')
        // console.log(this.props)

        const postStyleOn = {
            backgroundImage: `url('${this.props.srcPostPic}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            webkitFilter: 'brightness(50%)'
        }
        
        
        const postStyleOff = {
            backgroundImage: `url('${this.props.srcPostPic}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            webkitFilter: 'brightness(100%)'
        }


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
                    <div className={classes.postHover}>
                        <img src={WhiteHeart} alt="" height='20' />
                        <span>{this.props.likes}</span>
                        <img src={WhiteComment} alt="" height='40' />
                        <span>{this.props.comments.length}</span>
                    </div>
                :
                    null
                }
            </div>
            </div>
            )
    }

    
}

export default SquarePost;