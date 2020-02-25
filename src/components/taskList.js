import React, { useState, useEffect } from "react";
import Task from "./task";
import { getTasks, formatGetTasks } from "../common/api";

const TaskList = () => {
  let [tasksData, setTasksData] = useState([]);

  useEffect(() => {
    console.log("Tasks List Mounted");

    getTasks().then(data => {
      let formattedTasks = formatGetTasks(data)["ArrayTask"];
      console.log("formatted data : ");
      console.log(formattedTasks);
      setTasksData(formattedTasks);
    });
  }, []);

  return (
    <div className="taskList">
      {tasksData.map(item => {
        return (
          <Task key={item.uid} title={item.title} subtitle={item.subtitle} />
        );
      })}
    </div>
  );
};

export default TaskList;
