import React from "react";
import TaskList from "./taskList";
import Button from "./button";
import InputTask from "./inputTask";
import Header from "./header";

import "../css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orignalTaskData: [],
      searchedTaskData: [],
      inputTaskClass: [`InputTask`, `hide`],
      buttonContent: `+`
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:10010/getTasks/1")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          orignalTaskData: data["ArrayTask"],
          searchedTaskData: data["ArrayTask"]
        });
      });
  };

  searchChangeHandler = event => {
    const value = event.target.value;
    const orignalTaskData = this.state.orignalTaskData;
    const arr = [];
    orignalTaskData.forEach(item => {
      if (item.title.toLowerCase().includes(value.toLowerCase())) {
        arr.push(item);
      }
    });

    this.setState({
      searchedTaskData: arr
    });
  };

  submitHandler = event => {
    event.preventDefault();
    let newTask = {
      title: event.target.title.value,
      subtitle: event.target.subtitle.value
    };
    this.addTasks(newTask);
  };

  switchClass = () => {
    let x;
    let arr = this.state.inputTaskClass;
    if (arr[1] === "hide") {
      x = "+";
      arr.pop();
      arr.push("show");
    } else if (arr[1] === "show") {
      arr.pop();
      arr.push("hide");
      x = "-";
    }

    console.log(arr);
    this.setState({
      inputTaskClass: arr,
      buttonContent: x
    });
  };
  render = () => {
    const classList = this.state.inputTaskClass.join(" ");
    return (
      <div className="App">
        <Header searchChangeHandler={this.searchChangeHandler} />
        <TaskList taskData={this.state.searchedTaskData} />
        <Button
          content={this.state.buttonContent}
          buttonClick={this.switchClass}
        />
        <InputTask onSubmit={this.submitHandler} classList={classList} />
      </div>
    );
  };
}

export default App;
