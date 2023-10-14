import React from 'react';

const TodoItem = ({ task, onDelete }) => {
  return (
    <>
    <ul>
    <li>
      {task}
      <button className='btn1' onClick={onDelete}>Delete</button>
    </li>
    </ul>
    
    </>
    
  );
};

export default TodoItem;
