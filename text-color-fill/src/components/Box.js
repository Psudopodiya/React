import React from 'react'
import './box.css'
export const Box = (prop) => {
  return (
        <div className='box' style={{backgroundColor: prop.color}}>
            <p>{prop.color ? prop.color : "No color present"}</p>
        </div>
  )
}

export default Box