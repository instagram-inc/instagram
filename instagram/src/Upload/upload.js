import React from 'react';
import classes from './upload.module.css';

class Upload extends React.Component {
    state = {
        newPost : {
            pic : '',
            desc : ''
        }
    }

    setUrlPic = () => {

    }

    setDescription = () => {

    }

    render() {

        return (
            <React.Fragment>
                <h1 className={classes.title}>SHARE YOUR EXCITEMENTS AND EMOTIONS!</h1>
                <div className={classes.parentDiv}>
                    <div className={classes.innerDiv}>
                        <p className={classes.p}>First step</p>
                        <div>
                            <input className={classes.input} placeholder="URl to photo" size="80"></input>
                        </div>
                    </div>
                        
                    <div className={classes.innerDiv2}>
                        <p className={classes.p}>Second step</p>
                        <textarea className={classes.input} placeholder="Add discription..." rows="5" cols="80"></textarea>
                    </div>
                    
                    <div className={classes.innerDiv}> 
                        <p className={classes.p}>Final step</p>
                        <button
                        className={classes.shareButton}
                        // onClick={}
                        >SHARE
                        </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Upload;