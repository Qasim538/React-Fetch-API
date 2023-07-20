import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const[joke, setJoke] = useState("")

  const getJoke = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=> {
      setJoke(response.data.setup + " ... " + response.data.punchline)
    })
  }
  return (
    <div className="App">

    <h1> Best jokes are here! 
    </h1>
    <div >
    <button className='button' onClick={getJoke}>Get Joke</button>
    </div>
    <div className='joke'>
    {joke}
    </div>
    

  
    </div>
  );
}

export default App;
