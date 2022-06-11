import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const addNewTask = (task) => {
    if (!task.taskText) return null;
    const newTask=[task, ...taskList]
    setTaskList(newTask);
  };
  const removeTask= id=>{
    let updatedTasks= [...taskList].filter(task => task.id !== id)
    setTaskList(updatedTasks);
  }
  const completeTask= id=>{
    let updatedTasks = taskList.map(task =>{
      if(task.id === id){
        task.isComplete=true
      }
      return task
    })
    setTaskList(updatedTasks)
  }
  
  return (
    <>
      <TaskForm addNewTask={addNewTask} />
      <Task tasks={taskList} removeTask={removeTask} completeTask={completeTask}/>  
      
      </> 
       );
}
