import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
   

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const pauseHandler = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="App" >
    <div style={{
      display:'flex',
      backgroundColor:'GrayText',
      width:300,
      height:300,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-evenly'
      
    }} >
    <h1>Counter {time/1000} </h1>
     <button type="submit" onClick={handleStart} >Start</button>
     <button type="submit" onClick={pauseHandler}  >Pause</button>
     <button type="submit" onClick={handleReset} >Reset</button>
     <button type="submit" onClick={pauseHandler} >Stop</button>

    </div>
  
    </div>
  );
}

export default App;
