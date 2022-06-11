import React ,{useState} from "react";

export default function TaskForm({addNewTask}){
    const [input ,setInput] =useState('');
    const handleInputChange=(e) => {
        setInput(e.target.value)
    }
    const handleFormSubmit= (e) =>{
        e.preventDefault();
        addNewTask({
            id: Math.floor(Math.random() * 1000),
            taskText:input,
            isComplete:false
        })
        setInput('');

    }
    return(
        <>
        <form  className="taskForm">
            <input type="text"className="taskText" name="taskText" value={input} onChange={handleInputChange} placeholder="Add  new task"/>
            <button type="submit" className="btn" onClick={handleFormSubmit}> Add New Task</button>
        </form>
        </>
    )
}