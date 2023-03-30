const mongoose = require('mongoose');

const { Schema } = mongoose;

const favoritesSchema = new Schema({
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

const Favorites = mongoose.model('Favorites', favoritesSchema);

module.exports = Favorites;
