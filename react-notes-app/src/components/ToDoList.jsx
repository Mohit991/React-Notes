import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat", "Code"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks((prevTasks) => [...prevTasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            let temp = updatedTasks[index - 1];
            updatedTasks[index - 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            let temp = updatedTasks[index + 1];
            updatedTasks[index + 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="enter a task"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>
                    Add Task
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}
                        >
                            Up
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}
                        >
                            Down
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
