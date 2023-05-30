const db = require('./connection'); 
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Bundles'},
        { name: 'Bottles'},
        { name: 'Flavor Packs'}
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    await Product.insertMany([
        {
            image: 'starter.jpg',
            name:'Starter Bundle',
            category: categories[0]._id,
            price: 59.99
        },

        {
            image: 'family.jpg',
            name:'Family Bundle',
            category: categories[0]._id,
            price: 99.99
        },

        {
            image: 'summer.jpg',
            name: 'Summer Flavor Bundle',
            category: categories[0]._id,
            price: 29.99
        },

        {
            image: 'berry-blast.jpg',
            name: 'Berry Blast Bundle',
            category: categories[0]._id,
            price: 29.99
        },

        {
            image: 'tropical.jpg',
            name: 'Tropical Flavor Bundle',
            category: categories[0]._id,
            price: 29.99
        },

        {
            image: 'red-bottle.jpg',
            name: 'Red Bottle',
            category: categories[1]._id,
            price: 34.99
        },

        {
            image: 'orange-bottle.jpg',
            name: 'Orange Bottle',
            category: categories[1]._id,
            price: 34.99
        },

        {
            image: 'yellow-bottle.jpg',
            name: 'Yellow Bottle',
            category: categories[1]._id,
            price: 34.99
        },

        {
            image: 'green-bottle.jpg',
            name: 'Green Bottle',
            category: categories[1]._id,
            price: 34.99
        },

        {
            image: 'blue-bottle.jpg',
            name: 'Blue Bottle',
            category: categories[1]._id,
            price: 34.99
        },

        {
            image: 'black-bottle.jpg',
            name: 'Black Bottle',
            category: categories[1]._id,
            price: 34.99
        },

        {
            image: 'white-bottle.jpg',
            name: 'White Bottle',
            category: categories[1]._id,
            price: 34.99
        },

        {
            image: 'LemonLime.jpg',
            name: 'Lemon Lime Flavor',
            category: categories[2]._id,
            price: 4.99
        },

        {
            image: 'Orange.jpg',
            name: 'Orange Flavor',
            category: categories[2]._id,
            price: 4.99
        },

        {
            image: 'Berry.jpg',
            name: 'Berry Flavor',
            category: categories[2]._id,
            price: 4.99
        },

        {
            image: 'Pineapple.jpg',
            name: 'Pineapple Flavor',
            category: categories[2]._id,
            price: 4.99
        },

        {
            image: 'grapes.jpg',
            name: 'Grape Flavor',
            category: categories[2]._id,
            price: 4.99
        },

        {
            image: 'FruitPunch.jpg',
            name: 'Fruit Punch Flavor',
            category: categories[2]._id,
            price: 4.99
        },

        {
            image: 'Mango.jpg',
            name: 'Mango Flavor',
            category: categories[2]._id,
            price: 4.99
        },

        {
            image: 'Watermelon.jpg',
            name: 'Watermelon Flavor',
            category: categories[2]._id,
            price: 4.99
        },

        {
            image: 'Green-apple.jpg',
            name: 'Green Apple Flavor',
            category: categories[2]._id,
            price: 4.99
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
        email: 'John@mailme.com',
        password: 'password12345',
        cart: [],
    });

    console.log('users seeded');

    process.exit();
});

        







