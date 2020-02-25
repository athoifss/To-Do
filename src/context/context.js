import React from "react";

const appContext = React.createContext({
  userData: {},
  orignalTaskData: [],
  searchedTaskData: [],
  inputTaskClass: ["inputTask", "hide"],
  addButtonContent: "+",
  setSearchedTaskData: () => {},
  setOrignalTaskData: () => {},
  switchInputClass: () => {
    console.log("fluuou");
  }
});

export default appContext;
