const mongoose = require('mongoose');

const { Schema } = mongoose;
const Product = require('./Product');

const businessSchema = new Schema({
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
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  products: [Product.schema]
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;