import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

const Counter = () => {

    const[count, setCount] = useState(0)
    const[popup, handlePopup] = useState(false)


    const handleIncrease=()=>{
        setCount(count+1)
        if(count === 9){
            handlePopup(true)
        }
    }
    const handleDecrease=()=>{
        setCount(count-1)
        if(count === -9){
            handlePopup(true)
        }
    }
    const handleReset=()=>{
        setCount(0)
        handlePopup(false)
    }
    const handleClosePopup=()=>{
        handlePopup(false)
    }

    return (
        <div style={{marginTop: '150px'}}>
        <h1 style={{marginBottom: '20px'}}>Click Counter: {count}</h1>
        <Button variant="contained" onClick={handleIncrease}> + </Button>
        <Button variant="contained" color="secondary" onClick={handleReset} style={{ marginLeft: '10px' }}> Reset</Button>
        <Button variant="contained" onClick={handleDecrease} style={{ marginLeft: '10px' }}> -</Button>

        <Dialog open={popup} onClose={handleClosePopup}>
        <DialogTitle>Clicked 10 times </DialogTitle>
        <DialogActions>
          <Button onClick={handleReset} autoFocus>
            Reset
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    )
}

export default Counter