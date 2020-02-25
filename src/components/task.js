import React from "react";

class Task extends React.Component {
  render() {
    return (
      <div className="task">
        <div className="title">{this.props.title}</div>
        <div className="subtitle">{this.props.subtitle}</div>
      </div>
    );
  }
}

export default Task;
