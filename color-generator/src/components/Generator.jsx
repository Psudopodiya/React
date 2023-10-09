import React, { useState } from 'react'
import {Box, Button, Container, TextField,} from '@mui/material'
import {Unstable_NumberInput as NumberInput} from '@mui/base'

const Generator = () => {


    function generateColorShades(hexColor) {
        hexColor = hexColor.replace(/^#/, '');
        const r = parseInt(hexColor.slice(0, 2), 16);
        const g = parseInt(hexColor.slice(2, 4), 16);
        const b = parseInt(hexColor.slice(4, 6), 16);
        const step = 255 / (20 - 1);
        const shades = Array.from({ length: 20 }, (_, index) => {
          const shadeR = Math.max(0, Math.min(255, r - index * step));
          const shadeG = Math.max(0, Math.min(255, g - index * step));
          const shadeB = Math.max(0, Math.min(255, b - index * step));
          const shadeHex = `#${Math.round(shadeR).toString(16)}${Math.round(shadeG).toString(16)}${Math.round(shadeB).toString(16)}`;
          return shadeHex;
        });  
        return shades;
    }

    const[codes, setCodes] = useState({
        
    })
    const generateColorCodes=(event)=>{
        const hex = event.target.value
        setCodes(generateColorShades(hex))
    }
    
    return (
        <Container sx={{padding: 5, maxWidth: 'sm', alignItems: 'center'}}>
            <Box>
                <Box sx={{display: 'flex', direction:'row'}}>
                    <TextField placeholder='Enter the hex value of the color'></TextField>
                    <Button onClick={(event)=>generateColorCodes(event)}>Generate</Button>
                </Box>

                <Box>
                    {codes.map((color)=>{
                        return(
                            <Box sx={{background: 'black'}}>

                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Container>
    )
}

export default Generator