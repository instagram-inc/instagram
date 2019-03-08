import React from 'react';
import HeaderOfPost from '../HeaderOfPost/HeaderOfPost';
import PostPic from '../PostPic/PostPic';

import ActivityIcons from '../ActivityIcons/ActivityIcons'
import classes from './Post.module.css'
import ListOfComments from '../ListOfComments/ListOfComments';
import AddAComment from '../AddAComment/AddAComment';
import PostDescription from '../PostDescription/PostDescription';
import { connect } from 'react-redux';

class Post extends React.Component {
    
    state = {
        isTextAreaActive: false
    }

    toggle = () => {
        this.setState({  isTextAreaActive : !this.state.isTextAreaActive });
    }
    
    render(){
        const user = this.props.users.find(user => user.uid === this.props.uid);
        const post = user.posts.find(post => post.pid === this.props.pid);

        return (
            <section
            className={classes.post}>
                <HeaderOfPost {...user} />
                <PostPic {...post} />
                <ActivityIcons 
                onCommentAreaFocus={()=> this.toggle()}
                {...post}
                {...user} />
                <PostDescription {...user}{...post}/>
                <ListOfComments comments={post.comments}/>
                <AddAComment  
                statOfTextAreaActive ={this.state.isTextAreaActive}
                userId={user.uid} 
                postId={post.pid} 
                userName={user.name} 
                comments={post.comments}/>
            </section>
    
        )
    }

}

const mapStateToProps = state => {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps, null)(Post);

// export default Post