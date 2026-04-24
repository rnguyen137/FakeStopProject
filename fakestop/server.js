const express = require('express'),
      cors = require('cors'),
      dbOperations = require('./dbFiles/dbOperations'),
      Game = require('./dbFiles/game');

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.listen(API_PORT, () => console.log(`Server running on port ${API_PORT}`));

app.post('/addGame', async (req, res) => {
    await dbOperations.addGame(req.body);
    const result = await dbOperations.getGame(req.body.GameName);
    res.send(result.recordset);
});

app.post('/getGame', async (req, res) => {
    const result = await dbOperations.getGame(req.body.gameName);
    res.send(result.recordset);
});

//==================================================================================================================
// dbOperations.getAllGames().then(res => {
//     console.log(res.recordset);
// })

// let newGame = new Game(1002, 'Batman: Arkham City', 'PlayStation 3', 'Action-Adventure', 25, 9001);
// dbOperations.addGame(newGame).then(res => {
//     if (res) {
//         console.log('Game added successfully!');
//     }
// });

