const uuid = require('uuid');
const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'Title'
  },
  columns: {
    type: Array,
    default: []
  },
  id: {
    type: String,
    default: uuid
  }
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
