import React from 'react'

export const Search = (props) => {
  return (
    <div>
        <input onChange={props.handleSearchList} placeholder='Enter data to search'></input>
          {props.searchList.length ===0 ? 
            (<h4>No results found</h4>) :
            (props.searchList.map((task,key)=>{
              return(
                <div key={key}>
                  <h4>{task.taskName}</h4>
                </div>
              )
            }))
          }
    </div>
  )
}

export default Search