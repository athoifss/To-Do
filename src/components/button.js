import React from "react";
import "../css/button.css";

class Button extends React.Component {
  render = () => {
    return (
      <button onClick={this.props.buttonClick} className="button">
        {this.props.content}
      </button>
    );
  };
}

export default Button;
