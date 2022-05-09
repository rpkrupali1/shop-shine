const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "electronics" },
    { name: "jewelery" },
    { name: "men's clothing" },
    { name: "women's clothing" },
  ]);

  console.log("categories seeded");

  const products = await Product.insertMany([
    {
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: categories[1]._id,
      image: "braclet.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: categories[2]._id,
      image: "blueShirt.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: categories[2]._id,
      image: "jacket.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: categories[2]._id,
      image: "blueShirt.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: categories[1]._id,
      image: "braclet.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: categories[1]._id,
      image: "thinRing.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: categories[1]._id,
      image: "largeRing.jpg",
      rating: {
        rate: 3,
        count: 400,
      },
    },
  ]);
  console.log("products seeded");

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password123!",
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password123!",
  });

  console.log("users seeded");

  process.exit();
});
