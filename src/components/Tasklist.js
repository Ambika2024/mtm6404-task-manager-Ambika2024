import React from 'react';
import Task from './Tasks';
import './Tasklist.css';  // Import CSS for TaskList component

function TaskList() {
  const tasks = [
    { id: 1, title: 'Draft project proposal' },
    { id: 2, title: 'Develop API endpoints' },
    { id: 3, title: 'Test application performance' },
    { id: 4, title: 'Prepare presentation slides' },
    { id: 5, title: 'Conduct team review meeting' }
    
  ];

  return (
    <div>
      <h2>Task list</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
