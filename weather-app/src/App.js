import React from 'react';
import './App.css';
import { Card, CardContent, Typography, Box, Container } from '@mui/material';
import {Data} from './components/Data';
import {Search} from './components/Search'

function App() {
  return (
    <Container maxWidth='sm' style={{display:'flex', maxHeight:'100vh', justifyContent:'center', alignItems:'center'}}>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              <Search/>
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              <Data/>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
    
  );
}

export default App;
