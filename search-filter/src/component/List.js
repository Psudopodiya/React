import React from 'react'

export const List = (props) => {
  return (
    <div>
      <input onChange={(event)=> props.setNewTask(event.target.value)} placeholder='Enter task'></input>
          <button onClick={props.addTask}>Add Task</button>
          <div>
            {props.todoList.map((task,key)=>{
              return(
                <div key={key}>
                  <h4>{task.taskName}</h4>
                  <button onClick={()=>props.deleteTask(task.id)}>X</button>
                </div>
              )
            })}
          </div>
    </div>
  )
}

export default List