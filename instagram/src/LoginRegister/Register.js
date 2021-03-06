import React from 'react';
import classes from './Register.module.css';
import Button from '../common/UI/Button/Button';
import Insta from '../immages/Insta.png';
import { addNewUser } from '../common/UI/Post/actions/actions';
import { connect } from 'react-redux';

class Register extends React.Component {

    state = {
        isButtonActive : {
            isnameOk : false,
            isEmailOk : false,
            isPassOk : false,
        },
        newUser : {
            name : '',
            email : '',
            pass : '',
            srcProfilePic : '',
            followedUsers : [],
            followersOfMe : [],
            posts : []
        },
    };

    setname = event => {
        const MAX_NAME_LENGHT = 15;
        const value = event.target.value.toLowerCase();
        const newUser = {...this.state.newUser};
        newUser.name = value.substring(0,MAX_NAME_LENGHT);
        this.setState({ 
            ...this.state, newUser,  
            isButtonActive: this.nameDataChecker(newUser.name) ? 
            {...this.state.isButtonActive, isnameOk: true}
            :
            {...this.state.isButtonActive, isnameOk: false}
        });
    };

    nameDataChecker = data =>{
        if (data && typeof data === 'string' && data.trim().length > 4) {
            return !this.props.users.some(user => user.name.toLowerCase() === data.toLowerCase());
        } else {
            return false;
        };
    };
    
    setEmail = event => {
        const MAX_EMAIL_LENGHT = 30;
        const value = event.target.value;
        const newUser = {...this.state.newUser};
        newUser.email = value.substring(0,MAX_EMAIL_LENGHT).toLowerCase();
        this.setState({ 
            ...this.state, newUser,  
            isButtonActive: this.EmailDataChecker(newUser.email) ? 
            {...this.state.isButtonActive, isEmailOk: true}
            :
            {...this.state.isButtonActive, isEmailOk: false}
        });
    };

    EmailDataChecker = data => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (re.test(String(data).toLowerCase()) && !this.props.users.some(user => user.email.toLowerCase() === data.toLowerCase()));
    };
    
    setPass = event => {
        const MAX_PASS_LENGHT = 40;
        const value = event.target.value;
        const newUser = {...this.state.newUser};
        newUser.pass = value.substring(0,MAX_PASS_LENGHT);
        this.setState({ 
            ...this.state, newUser,  
            isButtonActive: this.PassDataChecker(newUser.pass) ? 
            {...this.state.isButtonActive, isPassOk: true}
            :
            {...this.state.isButtonActive, isPassOk: false}
        });
    };

    PassDataChecker = data =>{
        if (data && typeof data === 'string' && data.trim().length > 5) {
            return true;
        } else {
            return false;
        };
    };


    onAddUSer = () => {
        const [lastId] = this.props.users.sort( (user1, user2) => user2.uid - user1.uid);
        const newUserId = (lastId) ? lastId.uid + 1 : 1;
        const newData = {...this.state.newUser, uid : newUserId};
        this.props.onAddUSer(newData);
        const newUser = {name: '', email: '', pass: ''};
        this.setState({ newUser });
        this.props.history.goBack();
    };

    render() {
        let isBActive = false;
        if(this.state.isButtonActive.isnameOk === true &&
            this.state.isButtonActive.isEmailOk === true &&
            this.state.isButtonActive.isPassOk === true) {
            isBActive = true;
        };

        return (
            <div className={classes.parentBox}>
                <img className={classes.logo} src={Insta} alt=""></img>
                <div className={classes.dataDiv}>
                    <p className={ this.state.isButtonActive.isnameOk ?
                        classes.info
                    :
                        classes.error
                    }>Username must be unique and at least 5 characters</p>
                    <input className={classes.input}
                    type="text"
                    placeholder="Enter username"
                    onChange={this.setname}
                    value={this.state.newUser.name}
                    />
                    <p className={ this.state.isButtonActive.isEmailOk ?
                        classes.info
                    :
                        classes.error
                    }>You must enter a valid and unique e-mail</p>
                    <input className={classes.input}
                    type="email"
                    placeholder="Enter e-mail"
                    onChange={this.setEmail}
                    value={this.state.newUser.email}
                    />
                    <p className={ this.state.isButtonActive.isPassOk ?
                        classes.info
                    :
                        classes.error
                    }>Password must be at least 6 characters</p>
                    <input className={classes.input}
                    type="password"
                    placeholder="Enter password"
                    onChange={this.setPass}
                    value={this.state.newUser.pass}
                    />
                    <Button 
                    isActive={isBActive}
                    activeText={'Register'}
                    onAdd={ (isBActive) ?
                        () => this.onAddUSer()
                    :
                        null
                    }
                    />
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddUSer: user => dispatch(addNewUser(user))
    };
};

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);