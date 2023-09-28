import logo from './logo.svg';
import './App.css';
import {Box} from './components/Box'
import { useState } from 'react';

function App() {

  const[boxColor, setBoxColor] = useState("")

  const handleColorChange =(event)=>{
    setBoxColor(event.target.value)
    console.log(boxColor)
  }

  return (
    <div className='App'>
      <h1>Hello</h1>
      <Box color={boxColor}/>
      <input onChange={(event)=> handleColorChange(event)}></input>
    </div>
  );
}

export default App;
