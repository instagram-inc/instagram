import React from 'react';

class Login extends React.Component {

    state = {
        newUser : {
            email : '',
            pass : ''
        }
    }

    setEmail = event => {
        const value = event.target.value;
        const newUser = {...this.state.newUser};
        newUser.email = value;
        this.setState({ newUser });
    }
    
    setPass = event => {
        const value = event.target.value;
        const newUser = {...this.state.newUser};
        newUser.pass = value;
        this.setState({ newUser });
    }

    render() {

        return (
            <div>
                <input
                placeholder="Enter e-mail"
                onChange={this.setEmail}
                value={this.state.newUser.email}
                >
                </input>

                <input
                placeholder="Enter password"
                onChange={this.setPass}
                value={this.state.newUser.pass}
                >
                </input>

                <button onClick={this.onLogin}>Log in</button>
            </div>
        )
    }
}

export default Login;