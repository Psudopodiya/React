import React, { useState } from 'react';
import {useQuery} from '@tanstack/react-query'
import {Container, Paper, Typography, Button,  } from '@mui/material'
import Axios from 'axios'
import {Questions} from './Questions'

export const Categories = () => {

    const{data:categories, isLoading} = useQuery(['categories'],()=>{
        return Axios.get('https://the-trivia-api.com/api/categories').then((res)=> res.data)
    })
    
    const[selectedCategory, handleSelectedCategory] = useState(null)

    if(isLoading){
        return(
            <div>Is Loading</div>
        )
    }

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h5" gutterBottom> Select a Category</Typography>
                <Typography>
                    {Object.keys(categories).map((categoryName)=>{
                        return(
                                <Button value={categoryName} variant="outlined" style={{ margin: '10px' }} 
                                        onClick={()=> handleSelectedCategory(categoryName)}>
                                    {categoryName}
                                </Button>
                            )
                        })}
                </Typography>
            </Paper>
            {selectedCategory == null ? null  : <Questions selectedCategory={selectedCategory}/> }
        </Container>
    );
}

export default Categories;