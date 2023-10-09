import './App.css';
import {data} from './utils/data'
import {useState} from 'react'
import {Slider} from './components/Slider'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <div className="App">
      <h1>/Reviews</h1>
      <Slider people={people}/>
    </div>
  );
}

export default App;
