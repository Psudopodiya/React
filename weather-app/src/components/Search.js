import React, { useState } from 'react'
import {IconButton, InputBase, Paper} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {

    const [location, setLocation] = useState("Indore")

    const handleChange=(event)=>{
        setLocation(event.target.value)
        console.log(location)
    }

    return (
    <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
        <InputBase 
            sx={{ ml: 1, flex: 1 }} 
            placeholder="Search Location" 
            inputProps={{ 'aria-label': 'search google maps' }} 
            value ={location} 
            onChange={(event)=>handleChange(event)} />
        <IconButton><SearchIcon/></IconButton>
    </Paper>
    )
}

export default Search