import React, { useState } from "react";
import ShopList from "../component/ShopList";
import CategoryMenu from "../component/CategoryMenu";


const Shop = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ShopList />
   
    </div>
  );
};

export default Shop;
