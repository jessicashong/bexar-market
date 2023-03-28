const { Schema, model } = require('mongoose');

const Business = require('./Business');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  business: [Business.schema]
});

const Product = model('Product', productSchema);

module.exports = Product;
