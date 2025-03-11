// App.js
import React, { useState, useCallback } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";
import "./styles.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState(""); // "completed", "incomplete", or ""

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const toggleComplete = useCallback(
    (id) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [] // This callback doesn't depend on anything, so the dependency array is empty
  );

  const deleteTask = useCallback(
    (id) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    },
    [] // This callback doesn't depend on anything, so the dependency array is empty
  );

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="container">
      <div className="task-manager">
        <h1>Task Manager</h1>
        <ThemeToggle />
        <TaskForm addTask={addTask} />
        <div>
          <label>Filter tasks:</label>
          <select onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          filter={filter}
        />
      </div>
    </div>
  );
};

export default App;
