import React from 'react';
import HeaderOfPost from '../HeaderOfPost/HeaderOfPost';
import PostPic from '../PostPic/PostPic';

import ActivityIcons from '../ActivityIcons/ActivityIcons'
import classes from './Post.module.css'
import ListOfComments from '../ListOfComments/ListOfComments';
import AddAComment from '../AddAComment/AddAComment';


class Post extends React.Component {
    
    state = {
        isTextAreaActive: false
    }

    toggle = () => {
        this.setState({  isTextAreaActive : !this.state.isTextAreaActive });
    }
    render(){
        return (
            <section
            className={classes.post}>
                <HeaderOfPost
            {...this.props} 
                />
                <PostPic {...this.props} />
                <ActivityIcons onCommentAreaFocus={()=>{this.toggle()}} {...this.props} />
                <ListOfComments comments={this.props.comments}/>
                <AddAComment  
                statOfTextAreaActive ={this.state.isTextAreaActive}
                userId={this.props.uid} 
                postId={this.props.pid} 
                userName={this.props.name} 
                comments={this.props.comments}/>
            </section>
    
        )
    }

}


export default Post
