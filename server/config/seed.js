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
  process.exit();
});
