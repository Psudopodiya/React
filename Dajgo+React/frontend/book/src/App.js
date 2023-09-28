import React, { useEffect, useState } from "react";
import { TECollapse, TERipple } from "tw-elements-react";
import Axios from 'axios'

export default function App() {
  
  const[data, setData] = useState({})

  
  const fetchData = ()=> {
    Axios.get("http://127.0.0.1:8000/api/books/")
      .then((response) =>{
        setData(response.data)
        console.log(response.data)
        console.log(data)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <p></p>
    </div>
  );
}