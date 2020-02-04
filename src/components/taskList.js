import React from "react";
import "../css/taskList.css";
import Task from "./task";

class TaskList extends React.Component {
  render = () => {
    return (
      <div className="taskList">
        {this.props.taskData.map(item => {
          return (
            <Task key={item.uid} title={item.title} subtitle={item.subtitle} />
          );
        })}
      </div>
    );
  };
}

export default TaskList;
