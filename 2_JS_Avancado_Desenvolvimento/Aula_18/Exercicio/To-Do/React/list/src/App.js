import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
