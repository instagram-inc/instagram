import React, { Component } from "react";
import classes from './FollowButton.module.css';

class FollowButton extends Component {
    
    state = {
        isFollowing: false
    }

    toggle = () => {
        this.setState({ isFollowing : !this.state.isFollowing });
    }

    render() {
        let {followButton, followed} = classes;
        let buttonStyle = [followButton];
        if (this.state.isFollowing) {
          buttonStyle = [...buttonStyle,followed];
        }
        buttonStyle = buttonStyle.join(' ');
        
        return (
            <button
            onClick={this.toggle}
            className={buttonStyle}
            >
            {this.state.isFollowing ? "Following" : "Follow"}
            </button>
        );
    };
};

export default FollowButton;
