const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
      }]
})

module.exports = mongoose.model('Product', productSchema);