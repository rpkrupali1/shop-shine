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
      title: "Gold ring",
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      category: categories[1]._id,
      price: 99,
      quantity: 2,
    },
    {
      title: "Mens Cotton Jacket",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      category: categories[2]._id,
      price: 55,
      quantity: 1,
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
