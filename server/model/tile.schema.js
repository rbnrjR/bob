const mongoose = require('mongoose')
    , Schema = mongoose.Schema;
let TileSchema = new Schema({
  projects : {},
  colors: {},
  tags: [String],
  bookmarks: [Schema.Types.ObjectId],
  lastCleared: String
});
module.exports = mongoose.model('Tile', TileSchema);
