import React from 'react';
import classes from './Login.module.css';

class Login extends React.Component {

    state = {
        loginUser : {
            email : '',
            pass : ''
        }
    }

    setEmail = event => {
        const value = event.target.value;
        const loginUser = {...this.state.loginUser};
        loginUser.email = value;
        this.setState({ loginUser });
    }
    
    setPass = event => {
        const value = event.target.value;
        const loginUser = {...this.state.loginUser};
        loginUser.pass = value;
        this.setState({ loginUser });
    }

    onLogin = () => {
        this.props.onLogin(this.state.newUser);
        const loginUser = {email: '', pass: ''};
        this.setState({ loginUser });
        location.replace("/");
    }

    render() {

        return (
            <div className={classes.container}>
                <input
                placeholder="Enter e-mail"
                onChange={this.setEmail}
                value={this.state.loginUser.email}
                >
                </input>

                <input
                placeholder="Enter password"
                onChange={this.setPass}
                value={this.state.loginUser.pass}
                >
                </input>

                <button onClick={this.onLogin}>Log in</button>
            </div>
        )
    }
}

// export default Login;

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(setAsLogged(user))
    }
}

export default connect(null, mapDispatchToProps)(Login);