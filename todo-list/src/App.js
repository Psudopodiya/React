import React, { useState } from 'react';
import { Button, Input } from "@material-tailwind/react";
import List from './components/List';

function App() {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleNewTask = () => {
    const task = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      taskName: newTask,
    };
    setList([...list, task]);
    setNewTask('');
  }

  const deleteTask = (id) => {
    setList(list.filter((task) => task.id !== id));
  }

  return (
    <div className="flex justify-center mt-16">
      <div className="object-center box-content p-4 border-4">
        <h1 className="text-center text-5xl">Todo List</h1>
        <div className="flex gap-2 p-4">
          <Input color="blue" label="Enter Task" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
          <Button onClick={handleNewTask}>Add</Button>
        </div>
        <List list={list} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;

// import './App.css';
// import { Button, Input } from "@material-tailwind/react";
// import {List} from './components/List'
// import {useState, useEffect} from 'react'

// function App() {

//   const[list, setList] = useState([])
//   const[newTask, setNewTask] = useState("")

//   const handleNewTask = ()=>{
//     const task={
//       id: list.length === 0 ? 1 : list[list.length-1].id + 1,
//       taskName: newTask,
//     }
//     setList([...list, task])
//   }

//   const deleteTask=(id)=>{
//     setList(list.filter((task)=> { return task.id !== id}))
//   }

//   return (
//     <div className="flex justify-center mt-16">
//       <div className="object-center box-content p-4 border-4">
//         <h1 className="text-center text-5xl">Todo List</h1>
//         <div className="flex gap-2 p-4"> {/* Use a flex container */}
//           <Input color="blue" label="Enter Task" onChange={(event)=> setNewTask(event.target.value)}/>
//           <Button onClick={handleNewTask} >Add</Button>
//         </div>
//         <List list={list} deleteTask={deleteTask}/>
//       </div>
//   </div>
//   );
// }

// export default App;
