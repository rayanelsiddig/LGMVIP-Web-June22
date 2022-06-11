import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

export default function Task({ tasks, removeTask, completeTask }) {
  console.log(tasks);
  return tasks.map((task) => {
    return (
      <div className={task.isComplete ? 'complete task-div':'task-div'} key={task.id}> 
        <div className="task-text" >{task.taskText}</div>
        <div className="icons">
          <TiTick
          className={task.isComplete ?'hide' :''}
            onClick={() => {
              completeTask(task.id);
            }}
          ></TiTick>

          <RiCloseCircleLine
            onClick={() => {
              removeTask(task.id);
            }}
          ></RiCloseCircleLine>
        </div>
      </div>
    );
  });
}
