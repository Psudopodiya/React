import React, {useState} from 'react'
import {useQuery} from '@tanstack/react-query'
import {Container, Paper, Typography, Button} from '@mui/material'
import Axios from 'axios'

export const Questions = (props) => {

    const cat = props.selectedCategory.replace(/\s+/g,'_').replace(/&/g,"and").toLowerCase()
    
    const {data: questions, isError, isLoading} = useQuery(['question'],()=>{
        return Axios.get(`https://the-trivia-api.com/api/questions?categories=${cat}&limit=5`).then((res)=> res.data)
    })

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNextClick = () => {
        if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevClick = () => {
        if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    if(isLoading){
        return(
            <div>
                is Loading
            </div>
        )
    }

    if(isError){
        return(
            <div>
                Some Error Occured
            </div>
        )
    }

    return (
        <div>
        <Container maxWidth="sm">
          {questions.map((question, index) => {
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  visibility: index === currentQuestionIndex ? 'visible' : 'hidden',
                }}
              >
                <Paper elevation={3} style={{ padding: '20px', marginRight: '10px' }}>
                  <Typography variant="h5" gutterBottom>
                    {question.question}
                  </Typography>
                </Paper>
              </div>
            );
          })}
        </Container>
        <div>
          <Button variant="outlined" onClick={handlePrevClick} disabled={currentQuestionIndex === 0}>
            Previous
          </Button>
          <Button
            variant="outlined"
            onClick={handleNextClick}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    )
}