import "./App.css";
import React , {useEffect} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./components/TaskList";

function App() {
  useEffect(() => {
    document.title = 'To Do List';
  });
  return (
    <>

     
      <div className="taskListContainer">
         <h3>Manage your task in easy way. </h3>
        <TaskList />
      </div>
    </>
  );
}

export default App;
