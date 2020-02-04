import React from "react";
import "../css/inputTask.css";

class InputTask extends React.Component {
  render = () => {
    return (
      <div className={this.props.classList}>
        <form onSubmit={this.props.onSubmit}>
          <input name="title" />
          <input name="subtitle" />
          <input type="submit" value="add" />
        </form>
      </div>
    );
  };
}

export default InputTask;
