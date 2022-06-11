import "./App.css";
import React from "react";
import TaskList from "./components/TaskList";

function App() {

  return (
    <>
      <div className="taskListContainer">
        <TaskList />
      </div>

      <div className="footer">
        <p>Developed by Rayan Elsiddig MohamedAhmed.</p>
        <small>
          ©<span >{new Date().getFullYear()}</span> All Rights Reserved
        </small>
      </div>
    </>
  );
}

export default App;
