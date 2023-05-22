const db = require('./connection'); 
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Bundles'},
        { name: 'Flasks'},
        { name: 'Flavor Packs'}
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            image: 'alphabet-blocks.jpg',
            name:'Starter Bundle',
            category: categories[0]._id,
            price: 40.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name:'Family Bundle',
            category: categories[0]._id,
            price: 100.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Assorted Flavors Refill',
            category: categories[0]._id,
            price: 30.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Classic Flavors Refill',
            category: categories[0]._id,
            price: 30.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'All Flavors Refill',
            category: categories[0]._id,
            price: 90.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Red Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Orange Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Yellow Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Green Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Blue Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Purple Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Pink Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Black Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'White Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Camouflage Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'alphabet-blocks.jpg'
            name: 'Cola Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Lemon Lime Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Orange Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Berry Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Pineapple Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Grape Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Fruit Punch Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Mango Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Watermelon Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'alphabet-blocks.jpg',
            name: 'Green Apple Flavor',
            category: categories[2]._id,
            price: 10.00
        },
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        name: 'Jared Tichacek',
        email: 'Jared@mailme.com',
        password: 'password12345',
        cart: [],
    });

    await User.create({
        name: 'John ray',
        eamil: 'John@mailme.com',
        password: 'password12345',
        cart: [],
    });

    console.log('users seeded');

    process.exit();
});

        







