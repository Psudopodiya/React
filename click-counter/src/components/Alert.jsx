import React from 'react'
import Popup from 'reactjs-popup'

const Alert = () => {
  return (
    <div>
        <Popup trigger={<button> Trigger</button>} position="right center">
            <div>Popup content here !!</div>
        </Popup>
    </div>
  )
}

export default Alert