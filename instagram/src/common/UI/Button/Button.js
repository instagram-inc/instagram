import React from "react";
import classes from './Button.module.css'


class Button extends React.Component {
    
    // state = {
    //     isActive: this.props.isActive
    // }

    // toggle = () => {
    //     this.setState({ isActive : !this.state.isActive });
    // }

    render() {
        let {active, notActive} = classes
        let buttonStyle = [active];
        if (!this.props.isActive) {
          buttonStyle = [...buttonStyle,notActive];
        }
        buttonStyle = buttonStyle.join(' ') 
        
        return (
            <button
            onClick={this.props.onAdd}
            className={buttonStyle}
            >
            {this.props.isActive ? this.props.activeText : this.props.text || this.props.activeText}
            </button>
        )
    }
} 

export default Button;