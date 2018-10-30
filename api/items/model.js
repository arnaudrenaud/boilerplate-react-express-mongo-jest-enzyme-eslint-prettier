const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
  },
  { collection: 'items' }
);

module.exports = mongoose.model('Item', schema);
