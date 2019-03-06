import React from 'react';
import classes from './upload.module.css';
import Button from "../common/UI/Button/Button"
import { onAddNewPost } from './actions/actions'
import { connect } from 'react-redux';

class Upload extends React.Component {
    state = {
        newPost : {
            pic : '',
            desc : ''
        },
        uploadFormProperties:{
            isPicButtonActive: false,
            isDescButtonActive: false
        }
    }

    setUrlPic = event => {
        const MAX_UPLOAD_LENGHT = 500;
        const value = event.target.value;
        const newPost = {...this.state.newPost};
        newPost.pic = value.substring(0,MAX_UPLOAD_LENGHT);
        this.setState({
            ...this.state, newPost,  
            uploadFormProperties: this.postDataChecker(newPost.pic, true) ? 
            {...this.state.uploadFormProperties, isPicButtonActive:true}
            :
            {...this.state.uploadFormProperties, isPicButtonActive:false}
        })
        

    }

    postDataChecker = (data, urlType) =>{
        if (data && typeof data === 'string' && data.trim().length > 0) {
            if (urlType){
                return this.validateUrl(data);
            }
            return true;
        } else {
            return false;
        }
    }

    validateUrl = url => {
        const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return pattern.test(url) ? true : false;
    }


    setDescription = event => {
        const MAX_UPLOAD_LENGHT = 300;
        const value = event.target.value;
        const newPost = {...this.state.newPost};
        newPost.desc = value.substring(0,MAX_UPLOAD_LENGHT);
        this.setState({
            ...this.state, newPost,  
            uploadFormProperties: this.postDataChecker(newPost.desc) ? 
            {...this.state.uploadFormProperties, isDescButtonActive:true}
            :
            {...this.state.uploadFormProperties, isDescButtonActive:false}
        })

    }
    onAddNewPost = event => {
        event.preventDefault()
        if (this.state.uploadFormProperties.isPicButtonActive 
            && this.state.uploadFormProperties.isDescButtonActive) {
            const uid = this.props.currentUser.user.uid;
            const [lastPost] = this.props.currentUser.user.posts.sort((post1,post2) => post2.pid - post1.pid);
            const pid = lastPost ? lastPost.pid + 1 : 1
            const srcPostPic = this.state.newPost.pic.trim();
            const description = this.state.newPost.desc.trim();
            const postToBeAdded = {uid, pid, srcPostPic, description};
            this.props.onAddNewPost(postToBeAdded);
            this.setState({...this.state,newPost: {...this.state.newPost, pic: '', desc: ''},
            uploadFormProperties: {...this.state.uploadFormProperties, isPicButtonActive:false, isDescButtonActive: false}})
        }
    }

    render() {

        return (
            <React.Fragment>
                <h1 className={classes.title}>SHARE YOUR EXCITEMENTS AND EMOTIONS!</h1>
                <div className={classes.parentDiv}>
                    <div className={classes.innerDiv}>
                        <p className={classes.p}>First step</p>
                        <div>
                            <input 
                            className={classes.input} 
                            placeholder="URl to photo" 
                            size="80"
                            value={this.state.newPost.pic} 
                            onChange={this.setUrlPic}/>
                        </div>
                    </div>
                        
                    <div className={classes.innerDiv2}>
                        <p className={classes.p}>Second step</p>
                        <textarea 
                        className={classes.input} 
                        placeholder="Add discription..." 
                        rows="5" 
                        cols="80"
                        value={this.state.newPost.desc} 
                        onChange={this.setDescription}
                        >
                        </textarea>
                    </div>
                    
                    <div className={classes.innerDiv}> 
                        <p className={classes.p}>Final step</p>
                        {/* <button
                        className={classes.shareButton}
                        // onClick={}
                        >SHARE
                        </button> */}
                        <Button 
                            isActive={this.state.uploadFormProperties.isPicButtonActive 
                            && this.state.uploadFormProperties.isDescButtonActive} 
                            activeText={'Share'}
                            onAdd={event => this.onAddNewPost(event)}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        currentUser: state.currentUser,
        getUserByUid: uid => state.users.find(user => user.uid === uid)

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddNewPost: post => dispatch(onAddNewPost(post))
    }
}
   

export default connect(mapStateToProps, mapDispatchToProps)(Upload);


// function is_url(str)
// {
//   regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
//         if (regexp.test(str))
//         {
//           return true;
//         }
//         else
//         {
//           return false;
//         }
// }