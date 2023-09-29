// List.js
import React from 'react';
import { Button } from "@material-tailwind/react";

const List = ({ list, deleteTask }) => {
  return (
    <div className="flex flex-col items-center">
      {list.map((task) => (
        <div key={task.id} className='flex item-center mb-2'>
          {task.taskName}
          <Button onClick={()=> deleteTask(task.id)}>Delete</Button>
        </div>
      ))}
    </div>
  );
};

export default List;
