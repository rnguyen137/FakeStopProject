const express = require('express'),
      cors = require('cors'),
      dbOperations = require('./dbFiles/dbOperations'),
      Game = require('./dbFiles/game');


dbOperations.getAllGames().then(res => {
    console.log(res.recordset);
})

// let newGame = new Game(1002, 'Batman: Arkham City', 'PlayStation 3', 'Action-Adventure', 25, 9001);
// dbOperations.addGame(newGame).then(res => {
//     if (res) {
//         console.log('Game added successfully!');
//     }
// });
