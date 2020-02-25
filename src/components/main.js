import React, { useState, useEffect, useContext } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import App from "./App";
// import Login from "./login";
// import Header from "./header";
// import Intro from "./intro";
// import Cookies from "js-cookie";
import TaskList from "./taskList";
import Button from "./button";
import InputTask from "./inputTask";

import AppContext from "../context/context.js";
import "../css/style.css";

export default function Main() {
  const AppContextData = useContext(AppContext);
  const [appState, setAppState] = useState(AppContextData);

  useEffect(() => {
    console.log("Main comp mounted");

    const appData = appState;
    appData.switchInputClass = () => {
      console.log("Sheeeeeiiit");
      let buttonContent;
      let arr = appData.inputTaskClass;
      if (arr[1] === "hide") {
        buttonContent = "+";
        arr.pop();
        arr.push("show");
      } else if (arr[1] === "show") {
        arr.pop();
        arr.push("hide");
        buttonContent = "-";
      }

      appData.inputTaskClass = arr;
      appData.buttonContent = buttonContent;
    };

    setAppState(appData);
    console.log(appData);
  }, []);

  /** LOGIN ----------------------------------------------------------------------------------------------------- */

  // loginChangeHandler = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.loginFormData[name] = value;
  //   // console.log(this.loginFormData);
  // };

  // loginHandler = event => {
  //   event.preventDefault();
  //   console.log(this.loginFormData);

  // fetch("http://localhost:10010/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*"
  //   },
  //   body: JSON.stringify(this.loginFormData)
  // })
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //     if (data.loginSuccess) {
  //       Cookies.set("userData", {
  //         uid: data.uid,
  //         username: data.username,
  //         token: data.token
  //       });

  //       // window.location = "/";
  //     } else {
  //       console.log("Wrong Email Password");
  //     }

  //     console.log(Cookies.get("userData"));
  //   });
  // };
  //   this.setState({
  //     searchedTaskData: arr
  //   });
  // };

  // submitHandler = event => {
  //   event.preventDefault();
  //   let newTask = {
  //     title: event.target.title.value,
  //     subtitle: event.target.subtitle.value
  //   };
  //   this.addTasks(newTask);
  // };

  /** Add buton ---------------------------------------------------------------------------------------------------------------------------- */

  // switchClass = () => {
  // let x;
  // let arr = inputTaskClass;
  // if (arr[1] === "hide") {
  //   x = "+";
  //   arr.pop();
  //   arr.push("show");
  // } else if (arr[1] === "show") {
  //   arr.pop();
  //   arr.push("hide");
  //   x = "-";
  //   }

  //   this.setState({
  //     inputTaskClass: arr,
  //     buttonContent: x
  //   });
  // };

  // let tasksScreenClass = "task-screen";
  // let introClass = "intro";
  // let isLoggedIn = false;

  // let inputTaskClass = ["inputTask", "hide"];
  // let searchedTaskData = [];
  // let buttonContent = "+";

  // if (isLoggedIn) {
  //   tasksScreenClass = "tasks-screen show";
  //   introClass = "intro hide";
  // } else {
  //   tasksScreenClass = "tasks-screen hide";
  //   introClass = "tasks show";
  // }

  // const [tasksData, setTasksData] = useState();

  // useEffect(() => {
  //   fetch("http://localhost:3000/getTasks/1")
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //     });
  // }, []);
  return (
    <AppContext.Provider value={appState}>
      <div className="container">
        {/* <Header
        isLoggedIn={isLoggedIn}
        searchChangeHandler={searchChangeHandler}
      />

      <div className="wrapper">
        <Router>
          <Switch>
            <Route
              path="/login"
              render={props => (
                <div className="login">
                  <Login
                    changeHandler={this.loginChangeHandler}
                    loginHandler={this.loginHandler}
                  />
                </div>
              )}
            />
            <Route
              path="/"
              render={props => (
                <div className="main">
                  <div className="intro">
                    <Intro classList={introClass} />
                  </div>
                  <div className={tasksScreenClass}>
                    <App
                      searchChangeHandler={this.searchChangeHandler}
                      submitHandler={this.submitHandler}
                      switchClass={this.switchClass}
                      searchedTaskData={searchedTaskData}
                      buttonContent={buttonContent}
                      inputTaskClass={inputTaskClass}
                    />
                  </div>
                </div>
              )}
            />
          </Switch>
        </Router>
      </div> */}

        <TaskList />
        <InputTask />
        <Button />
      </div>
    </AppContext.Provider>
  );
}
