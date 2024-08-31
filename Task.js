import React from 'react';
import './Task.css';

function Task({ task, deleteTask, editTask, markComplete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-info">
        <h3>{task.text}</h3>
        <p>Priority: {task.priority}</p>
        <p>Deadline: {task.deadline}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => markComplete(task.id)}>✔</button>
        <button onClick={() => editTask(task.id, { ...task, text: 'Updated Task' })}>✏</button>
        <button onClick={() => deleteTask(task.id)}>🗑</button>
      </div>
    </div>
  );
}

export default Task;
