const db = require('./connection');
const { User, Business, Category, Product } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Wood-working' },
    { name: 'Leather' },
    { name: 'Jewelry' },
    { name: 'Textiles' },

  ]); 
  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Birdhouse',
      description:
        'Cute wooden birdhouse for your backyard.',
      image: 'birdhouse.jpg',
      category: categories[0]._id,
      price: 25.99,
      quantity: 2,
    },
    {
      name: 'Bison Billfold Wallet',
      description:
        'Wallet made from bison leather and lovingly hand laced.',
      image: 'bisonbillfoldwallet.jpg',
      category: categories[1]._id,
      price: 49.99,
      quantity: 1,
    },
    {
      name: 'Topaz Pendant',
      category: categories[2]._id,
      description:
        'Rough cut topaz stone set in sterling silver setting.',
      image: 'topazpendant.jpg',
      price: 59.99,
      quantity: 2,
    },
    {
      name: 'Black Skirt',
      category: categories[3]._id,
      description:
        'Pleated black skirt for nice movability.',
      image: 'blackskirt.jpg',
      price: 10.99,
      quantity: 5,
    },
    
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
  });

  console.log('users seeded');

  process.exit();
});
