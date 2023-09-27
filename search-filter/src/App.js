import { useState } from 'react';
import './App.css';
import {List} from './component/List'
import {Search} from './component/Search'

function App() {

  const[todoList, setTodoList] = useState([])
  const[newTask, setNewTask] = useState("")
  const[searchList, setSearchList] = useState([todoList])

  const addTask=()=>{

    const task={
      id: todoList.length ===0 ? 1 : todoList[todoList.length-1].id +1,
      taskName: newTask
    }

    setTodoList([...todoList, task]);
    setSearchList([...todoList, task])
  }

  const deleteTask=(id)=>{
    setTodoList(todoList.filter((task)=> task.id !== id))
    setSearchList(searchList.filter((task)=> task.id !== id))  
  }

  const handleSearchList =(event)=>{
    if(event.target.value === ""){
      setSearchList(todoList)
    }else{
      setSearchList(searchList.filter((task)=>{
        return task.taskName.toLowerCase().includes(event.target.value.toLowerCase())
      }))
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='left-half'>
          <h2>Todo List</h2>
          <List todoList={todoList} deleteTask={deleteTask} addTask={addTask} setNewTask={setNewTask}/>
        </div>
        <div className='right-half'>
          <h2>Search in List</h2>
          <Search handleSearchList={handleSearchList} searchList={searchList}/>
        </div>

      </div>

    </div>
  );
}

export default App;
