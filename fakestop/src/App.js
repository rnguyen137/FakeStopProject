import { useState } from 'react';
import './App.css';

function App() {

  const [returnedData, setReturnedData] = useState('');
  const [game, setGame] = useState({
    GameID: 0,
    GameName: '',
    System: '',
    Genre: '',
    Quantity: 0,
    StoreID: 0
  });

  const setInput = (e) => {
    const {name, value} = e.target;

    if (name === 'GameID' || name === 'Quantity' || name === 'StoreID') {
      setGame(prevState => ({
        ...prevState,
        [name]: parseInt(value) 
      }));
      return;
    }

    setGame(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const fetchData = async () => {
    const newData = await fetch('/getGame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        gameName: game.GameName
      })
    })
    .then(res => res.json());
    setReturnedData(newData[0]);
  }

  const createGame = async () => {
      const newData = await fetch('/addGame', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...game
        })
      })
      .then(res => res.json());
      setReturnedData(newData[0]);
    }

  return (
    <div className="App">
      <input 
        type="number" 
        name="GameID" 
        placeholder="Game ID" 
        onChange={setInput}></input>
      <input 
        name="GameName" 
        placeholder="Game Name" 
        onChange={setInput}></input>
      <input 
        name="System" 
        placeholder="System" 
        onChange={setInput}></input>
      <input 
        name="Genre" 
        placeholder="Genre" 
        onChange={setInput}></input>
      <input 
        type="number" 
        name="Quantity" 
        placeholder="Quantity" 
        onChange={setInput}></input>
      <input 
        type="number" 
        name="StoreID" 
        placeholder="Store ID" 
        onChange={setInput}></input>

      <button onClick={() => createGame()}>Add Game</button>
      <button onClick={() => fetchData()}>Get Game</button>

      <p>GameID: {returnedData.GameID}</p>
      <p>GameName: {returnedData.GameName}</p>
      <p>System: {returnedData.System}</p>
      <p>Genre: {returnedData.Genre}</p>
      <p>Quantity: {returnedData.Quantity}</p>
      <p>StoreID: {returnedData.StoreID}</p>
    </div>
  );
}

export default App;
