import React from "react";

const categroies = [
  {
    image: require("../../assets/images/jewelery.jpg"),
    pageLink: "/shop",
    name: "Jewelery",
  },
  {
    image: require("../../assets/images/electronics.jpg"),
    pageLink: "/shop",
    name: "Electronics",
  },
  {
    image: require("../../assets/images/mensclothing.jpg"),
    pageLink: "/shop",
    name: "Men's Clothing",
  },
  {
    image: require("../../assets/images/womensclothing.jpg"),
    pageLink: "/shop",
    name: "Women's Clothing",
  },
];

const Categories = () => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-name">
          <h2>Categories</h2>
        </div>

        <div className="row">
          {categroies.map((categroies) => (
            <div key={categroies.name} className="col-xs-6 col-md-3">
              <a href={categroies.pageLink}>
                <img
                  className="photo"
                  src={categroies.image}
                  alt={categroies.name}
                />
              </a>
              <h4>{categroies.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;