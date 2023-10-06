import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import {Container, Card, CardContent, Box, Typography} from '@mui/material'


const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://imdb-top-100-movies.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': '06ec2ae31bmshd15aa4a6bbe8189p17ac72jsn9373b80b53b0',
        'X-RapidAPI-Host': 'epic-free-games.p.rapidapi.com',
      },
    };
  
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw error;
    }
};
  

export const Tours = () => {
    const { data, isLoading, isError } = useQuery(['games'], fetchData);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (isError) {
        return <div>Error loading data.</div>;
    }

    return(
        <div>
            {data?.map((game,key)=>{
                return(
                   <Container key={key}>
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                </Typography>
                            </CardContent>
                            </Box>
                        </Card>
                   </Container> 
                )
            })}
        </div>
    )
}