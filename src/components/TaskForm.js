// TaskForm.js
import React, { useState, useRef, useEffect } from "react";
import "./TaskForm.css";
import "./TaskItem.css"; // Import styles
import "./TaskList.css"; // Import styles
const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Create a reference for the input field using useRef
  const titleInputRef = useRef();

  // Auto-focus the title input field when the component mounts
  useEffect(() => {
    titleInputRef.current.focus();
  }, []); // Empty dependency array ensures this runs only on mount

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && description) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        completed: false,
      };
      addTask(newTask);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Task Title</label>
        <input
          type="text"
          id="title"
          ref={titleInputRef} // Attach the reference to the input field
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Task Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
        ></textarea>
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
