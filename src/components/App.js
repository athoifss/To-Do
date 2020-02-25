import React from "react";

import TaskList from "./taskList";
import Button from "./button";
import InputTask from "./inputTask";

class App extends React.Component {
  render = () => {
    return (
      <div className="app">
        <TaskList taskData={this.props.searchedTaskData} />
        <Button
          content={this.props.buttonContent}
          buttonClick={this.props.switchClass}
        />
        <InputTask
          onSubmit={this.props.submitHandler}
          classList={this.props.inputTaskClass}
        />
      </div>
    );
  };
}

export default App;
