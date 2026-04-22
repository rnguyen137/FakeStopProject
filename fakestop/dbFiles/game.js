class Game{
    constructor(GameID, GameName, System, Genre, Quantity, StoreID) {
        this.GameID = GameID;
        this.GameName = GameName;
        this.System = System;
        this.Genre = Genre;
        this.Quantity = Quantity;
        this.StoreID = StoreID;
    }
}

module.exports = Game;