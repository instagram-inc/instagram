import React from 'react';
import classes from './LandscapePost.module.css'
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import HeaderOfPost from '../HeaderOfPost/HeaderOfPost';
import PostDescription from '../PostDescription/PostDescription';
import ListOfComments from '../ListOfComments/ListOfComments'
import ActivityIcons from '../ActivityIcons/ActivityIcons';
import AddAComment from '../AddAComment/AddAComment';

class LandscapePost extends React.Component {
    
    state = {
        isTextAreaActive: false
    }
    
    hidePost = () => {
        this.props.history.goBack();
    }
    stopPropagation = event => {
        event.stopPropagation();
    }
    toggle = () => {
        this.setState({  isTextAreaActive : !this.state.isTextAreaActive });
    }
    render () {
        const {uid, pid} = this.props.match.params
        const currentUid = +uid;
        const currentPid = +pid;
        const {user, post} = this.props.getUserAndPostBydIds(currentUid,currentPid)
        const ACTIVTY_DIV_STYLE = {width: '30%'};
        const DESCRIPTION_DIV_CSS = {marginBottom: '1vh'};

        const backgroundSrc = post ? {backgroundImage: `url("${post.srcPostPic}")`} : null;
        return (
            <React.Fragment>
                <div 
                onClick={this.hidePost}   // Black container
                className={classes.blackContainer}> 

                    <div 
                    onClick={this.stopPropagation} // Post container
                    className={classes.postContainer}>
                        
                        {post ?
                            <div 
                            src={post.srcPostPic}
                            style={backgroundSrc}
                            className={classes.picContainer} // Post Pic container
                            ></div>
                        :
                            null
                        }
                        
                        <div                                // Post info container
                        className={classes.postInfo}> 
                            <HeaderOfPost {... user} />

                            <hr />

                            <div                                // Comment container
                            className={classes.commentArea}>

                            <PostDescription 
                            {...user}{...post}
                            descriptionCss={DESCRIPTION_DIV_CSS}/>

                            {post ?
                                <ListOfComments comments={post.comments}/>
                            :
                                null
                            }

                            <ActivityIcons 
                            onCommentAreaFocus={()=> this.toggle()}
                            landscapePostStyle = {ACTIVTY_DIV_STYLE} 
                            {...post}
                            {...user} />

                            <hr />

                            {post ?
                                <AddAComment  
                                statOfTextAreaActive ={this.state.isTextAreaActive}
                                userId={user.uid} 
                                postId={post.pid} 
                                userName={user.name} 
                                comments={post.comments}/>
                            :
                                null
                            }

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        users: state.users,
        getUserAndPostBydIds: (uid, pid) => {
            const user = state.users.find(user => user.uid === uid);
            const post = user.posts.find(post => post.pid === pid);
            return {user, post};
        },
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(withRouter(LandscapePost));

// export default landscapePost