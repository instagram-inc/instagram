import React from 'react';
import classes from './Login.module.css';
import Button from '../common/UI/Button/Button';
import Insta from '../immages/Insta.png';
import { Link } from 'react-router-dom';
import { setAsLogged } from '../common/UI/Post/actions/actions';
import { connect } from 'react-redux';

class Login extends React.Component {

    state = {
        isButtonActive : {
            isEmailOk : false,
            isPassOk : false
        },
        loginUser : {
            email : '',
            pass : '',
            matchedUser : null
        }
    }

    setEmail = event => {
        const MAX_EMAIL_LENGHT = 30;
        var value = event.target.value;
        const loginUser = {...this.state.loginUser};
        loginUser.email = value.substring(0,MAX_EMAIL_LENGHT);
        this.setState({ 
            ...this.state, loginUser,  
            isButtonActive: this.EmailChecker(loginUser.email) ? 
            {...this.state.isButtonActive, isEmailOk: true}
            :
            {...this.state.isButtonActive, isEmailOk: false}
        });
    };

    EmailChecker = email => {
        return this.props.users.some(user => user.email === email);
    };

    setPass = event => {
        const MAX_PASS_LENGHT = 40;
        const value = event.target.value;
        const loginUser = {...this.state.loginUser};
        loginUser.pass = value.substring(0,MAX_PASS_LENGHT);
        this.setState({ 
            ...this.state, loginUser,  
            isButtonActive: this.PassChecker(loginUser.pass) ? 
            {...this.state.isButtonActive, isPassOk: true}
            :
            {...this.state.isButtonActive, isPassOk: false}
        });
    };

    PassChecker = pass => {
        return this.props.users.some(user => user.pass === pass);
    };

    onLoginUser = () => {
        const match = this.props.users.find(user => user.email === this.state.loginUser.email);
        this.props.onLoginUser(match);
        

        const loginUser = {email: '', pass: '', matchedUser: null};
        this.setState({ loginUser });
    };

    render() {
        let isBActive = false;
        if(this.state.isButtonActive.isEmailOk === true &&
            this.state.isButtonActive.isPassOk === true) {
            isBActive = true;
        };

        return (
            <div className={classes.parentBox}>
            <img className={classes.logo} src={Insta} alt=""></img>
                <div className={classes.dataDiv}>
                    <input className={this.state.isButtonActive.isEmailOk ?
                        classes.input
                    :
                        classes.error
                    }
                    type="text"
                    placeholder="Enter e-mail"
                    onChange={this.setEmail}
                    value={this.state.loginUser.email}
                    />
                    <input className={this.state.isButtonActive.isPassOk ?
                        classes.input
                    :
                        classes.error
                    }
                    type="password"
                    placeholder="Enter password"
                    onChange={this.setPass}
                    value={this.state.loginUser.pass}
                    />
                    {isBActive ?
                        <Link to="/">
                            <Button 
                                isActive={isBActive}
                                activeText={'Log in'}
                                onAdd={ (isBActive) ?
                                    () => this.onLoginUser()
                                :
                                    null
                                }
                            />
                        </Link>
                    :
                        <Button 
                        isActive={isBActive}
                        activeText={'Log in'}
                        onAdd={ (isBActive) ?
                            () => this.onLoginUser()
                        :
                            null
                        }
                        />
                    }
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoginUser: user => dispatch(setAsLogged(user))
    };
};

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);