import React from "react";
import NavigateButton from "./NavigateButton";

class Intro extends React.Component {
  render = () => {
    console.log(this.props.classList);
    return (
      <div className={this.props.classList}>
        <h1>WELCOME TO TO-DO</h1>
        <NavigateButton route="/login" />
      </div>
    );
  };
}

export default Intro;
