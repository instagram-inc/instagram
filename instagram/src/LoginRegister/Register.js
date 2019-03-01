import React from 'react';
import classes from './Register.module.css';

class Register extends React.Component {

    state = {
        newUser : {
            acc : '',
            email : '',
            pass : ''
        }
    }

    setAcc = event => {
        const value = event.target.value;
        const newUser = {...this.state.newUser};
        newUser.acc = value;
        this.setState({ newUser });
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

    onAddUSer = () => {
        this.props.onAddAlcohol(this.state.newUser);
        const newUser = {acc: '', email: '', pass: ''};
        this.setState({ newUser });
        this.props.history.goBack();
    }

    render() {

        return (
            <div>
                <input
                placeholder="Enter username"
                onChange={this.setAcc}
                value={this.state.newUser.acc}
                >
                </input>
                
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

                <button onClick={this.onAddUSer}>Log in</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddUSer: user => dispatch(addNewUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Register);