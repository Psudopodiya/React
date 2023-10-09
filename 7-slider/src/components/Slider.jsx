import React, { useState } from 'react'
import {Avatar, Paper, Typography, Container, Box, Button} from '@mui/material'
import {NavigateBefore, NavigateNext} from '@mui/icons-material'
import shadows from '@mui/material/styles/shadows'

export const Slider = (props) => {
    const person = props.people
    const[index, setIndex] = useState(0)
    const currentPerson = person[index]
    const handleClick = (value) => {
        if (value === 'prev') {
          setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : person.length - 1));
        } else {
          setIndex((prevIndex) => (prevIndex < person.length - 1 ? prevIndex + 1 : 0));
        }
      };

    return (
        <Container sx={{padding:5, maxWidth:'sm'}}>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', padding:3}}>
                    <Box sx={{padding:3}}>
                        <Avatar alt={currentPerson.name} src={currentPerson.image} sx={{height: 300, width: 300}}/>
                        {currentPerson.name}
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'row', gap:4}}>
                        <Box sx={{alignItems:'left'}}>
                            <Button onClick={()=>handleClick('prev')} startIcon={<NavigateBefore/>}></Button>
                        </Box>
                        {currentPerson.title}
                        <Box sx={{alignItems:'right'}}>
                            <Button onClick={()=>handleClick('next')} endIcon={<NavigateNext/>}></Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <Box sx={{width:400}}>
                        <Typography>
                            {currentPerson.quote}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
  )
}

export default Slider