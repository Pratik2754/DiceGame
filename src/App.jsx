import './App.css';
import { useState } from 'react';
import Startgame from "./components/Startgame";
import Playgame from './components/Playgame';

function App() {

  const[isgamestart, setisgamestart] = useState(false);

  const togglegameplay = () => {
    setisgamestart(!isgamestart);
  }

  return (
    <>
     {isgamestart ? <Playgame/> : <Startgame toggle={togglegameplay} /> }
    </>
  )
}

export default App;
