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

  await Business.deleteMany();

  const businesses = await Business.insertMany([
    {
      email: 'woodchippers@email.com',
      password: 'password1234',
      businessName: 'Wood Chippers',
      description: 'Wood Workers',
      image: 'logo.jpg',
      category: categories[0]._id,

    },
    {
      email: 'bigbexar@email.com',
      password: 'password1234',
      businessName: 'Big Bexar Leather',
      description: 'Leatherworkers',
      image: 'logo.jpg',
      category: categories[1]._id,
    },
    {
      email: 'windfind@email.com',
      password: 'password1234',
      businessName: 'Windings and Findings',
      description: 'Jewelry making',
      image: 'logo.jpg',
      category: categories[2]._id,
    },
    {
      email: 'scrappy@email.com',
      password: 'password1234',
      businessName: 'Sewy Scraps',
      description: 'Sewing',
      image: 'logo.jpg',
      category: categories[3]._id,
    },

  ]);
  console.log('businesses seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Birdhouse',
      description:
        'Cute wooden birdhouse for your backyard.',
      image: 'birdhouse.jpg',
      price: 25.99,
      quantity: 2,
      business: businesses[0]._id,
    },
    {
      name: 'Bison Billfold Wallet',
      description:
        'Wallet made from bison leather and lovingly hand laced.',
      image: 'bisonbillfoldwallet.jpg',
      price: 49.99,
      quantity: 1,
      business: businesses[1]._id,
    },
    {
      name: 'Topaz Pendant',
      description:
        'Rough cut topaz stone set in sterling silver setting.',
      image: 'topazpendant.jpg',
      price: 59.99,
      quantity: 2,
      business: businesses[2]._id,
    },
    {
      name: 'Black Skirt',
      description:
        'Pleated black skirt for nice movability.',
      image: 'blackskirt.jpg',
      price: 10.99,
      quantity: 5,
      business: businesses[3]._id,
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    userName: 'Lydia',
    email: 'lydia@email.com',
    password: 'password1234',
  });

  await User.create({
    userName: 'Jess',
    email: 'jess@email.com',
    password: 'password1234',
  });

  await User.create({
    userName: 'Chloe',
    email: 'chloe@email.com',
    password: 'password1234',
  });

  await User.create({
    userName: 'Michael',
    email: 'michael@email.com',
    password: 'password1234',
  });

  console.log('users seeded');

  process.exit();
});