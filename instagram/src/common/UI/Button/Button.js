import React from "react";
import classes from './Button.module.css'


class Button extends React.Component {
    
    render() {
      
        let {active, notActive} = classes
        let buttonStyle = [active];
        if (!this.props.isActive) {
          buttonStyle = [...buttonStyle,notActive];
        }
        buttonStyle = buttonStyle.join(' ') 
        
        return (
            <button
            style={this.props.style}
            onClick={this.props.onAdd}
            className={buttonStyle}
            >
            {this.props.isActive ?  this.props.activeText : this.props.text  || this.props.activeText}
            </button>
        )
    }
} 

export default Button;