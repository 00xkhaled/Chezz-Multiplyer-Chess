//  Game Schema which contains the user the colors and pgn = moves
// also contains the result of the game

var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var GameSchema = mongoose.Schema({
    user: { type: Schema.ObjectId, ref: 'User' },
    white: String,
    black: String,
    pgn: String,
    result: String
});

mongoose.model('Game', GameSchema);
