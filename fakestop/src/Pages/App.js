import React, { useState } from 'react';
import '../App.css';
import Navbar from '../Navbar';

export default function App() {

  const [returnedData, setReturnedData] = useState('');
  const [showTable, setShowTable] = useState(false);
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
    setReturnedData(newData);
    setShowTable(true);
    console.log(returnedData);
    console.log(showTable);
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
      alert('Game added successfully!');
    }

  const getAllGames = async () => {
    const newData = await fetch('/getAllGames', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
    .then(res => res.json());
    setReturnedData(newData);
    setShowTable(true);
  }


  return (
    <div>
      <Navbar />
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
        <button onClick={() => getAllGames()}>Get All Games</button>
        <br/>

        {showTable && returnedData.length > 0 && (
          <table border="1px solid black">
            <thead>
              <tr>
                <th>Game ID</th>
                <th>Game Name</th>
                <th>System</th>
                <th>Genre</th>
                <th>Quantity</th>
                <th>Store</th>
              </tr>
            </thead>
            <tbody>
              {returnedData.map(game => (
                <tr key={game.GameID}>
                  <td>{game.GameID}</td>
                  <td>{game.GameName}</td>
                  <td>{game.System}</td>
                  <td>{game.Genre}</td>
                  <td>{game.Quantity}</td>
                  <td>{game.StoreID}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* <p>GameID: {returnedData.GameID}</p>
        <p>GameName: {returnedData.GameName}</p>
        <p>System: {returnedData.System}</p>
        <p>Genre: {returnedData.Genre}</p>
        <p>Quantity: {returnedData.Quantity}</p>
        <p>StoreID: {returnedData.StoreID}</p> */}
      </div>
    </div>
  );
}

