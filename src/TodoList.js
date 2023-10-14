import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className='div'>
      <h1 className='h1'>Todo List</h1>
      <div>
        <input
        className='input'
          type="text"
          placeholder="Enter a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button className='btn2' onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onDelete={() => handleDeleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
