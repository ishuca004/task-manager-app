import { FaTrash, FaCheckCircle } from "react-icons/fa";
import "./TaskItem.css"; // Import styles

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-details">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <FaCheckCircle
          className={`icon complete-icon ${task.completed ? "done" : ""}`}
          onClick={() => toggleComplete(task.id)}
        />
        <FaTrash className="icon delete-icon" onClick={() => deleteTask(task.id)} />
      </div>
    </div>
  );
};

export default TaskItem;
