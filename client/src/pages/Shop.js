import React, { useState } from "react";
//import ProductList from "../component/ShopList";
import CategoryMenu from "../component/CategoryMenu";

import ShopList from "../component/ShopList";

const Shop = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ShopList />
    </div>
  );
};

export default Shop;
