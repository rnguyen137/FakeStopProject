const config = require('./dbConfig'),
      sql = require('mssql');

const getAllGames = async () => {
    try {
        let pool = await sql.connect(config);
        let games = await pool.request().query("SELECT * FROM Games");

        return games;
    }
    catch (error) {
        console.log(error);
    }        
}

const getGame = async (gameName) => {
    try {
        let pool = await sql.connect(config);
        let game = await pool.request().query(`SELECT * FROM Games WHERE GameName = '${gameName}'`);

        return game;
    }
    catch (error) {
        console.log(error);
    }        
}

const addGame = async (Game) => {
    try {
        let pool = await sql.connect(config);
        let games = await pool.request().query(`INSERT INTO Games VALUES
        (${Game.GameID}, '${Game.GameName}', '${Game.System}', '${Game.Genre}', ${Game.Quantity}, ${Game.StoreID})`);

        return games;
    }
    catch (error) {
        console.log(error);
    }        
}

module.exports = {
    addGame,
    getAllGames,
    getGame
};