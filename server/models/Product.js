const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: Number,
            required: true
        },
        imageURL: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    }
);

const Product = model('Product', productSchema);

module.exports = Product;
