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
            image: 'StarterBundlepng.png',
            name:'Starter Bundle',
            category: categories[0]._id,
            price: 40.00
        },

        {
            image: 'FamilyBundle.png',
            name:'Family Bundle',
            category: categories[0]._id,
            price: 100.00
        },

        {
            image: 'AssortedRefill.png',
            name: 'Assorted Flavors Refill',
            category: categories[0]._id,
            price: 30.00
        },

        {
            image: 'ClassicRefill.png',
            name: 'Classic Flavors Refill',
            category: categories[0]._id,
            price: 30.00
        },

        {
            image: 'AllRefill.png',
            name: 'All Flavors Refill',
            category: categories[0]._id,
            price: 90.00
        },

        {
            image: 'RedBottle.png',
            name: 'Red Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'OrangeBottle.png',
            name: 'Orange Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'YellowBottle.png',
            name: 'Yellow Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'GreenBottle.png',
            name: 'Green Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'BlueBottle.png',
            name: 'Blue Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'PurpleBottle.png',
            name: 'Purple Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'PinkBottle.png',
            name: 'Pink Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'BlackBottle.png',
            name: 'Black Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'WhiteBottle.png',
            name: 'White Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: '',
            name: 'Camouflage Flask',
            category: categories[1]._id,
            price: 30.00
        },

        {
            image: 'Cola.jpg',
            name: 'Cola Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'LemonLime.jpg',
            name: 'Lemon Lime Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'Orange.jpg',
            name: 'Orange Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'Berry.jpg',
            name: 'Berry Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'Pineapple.jpg',
            name: 'Pineapple Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'grapes.jpg',
            name: 'Grape Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'FruitPunch.jpg',
            name: 'Fruit Punch Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'Mango.jpg',
            name: 'Mango Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'Watermelon.jpg',
            name: 'Watermelon Flavor',
            category: categories[2]._id,
            price: 10.00
        },

        {
            image: 'Green-apple.jpg',
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
        email: 'John@mailme.com',
        password: 'password12345',
        cart: [],
    });

    console.log('users seeded');

    process.exit();
});

        







