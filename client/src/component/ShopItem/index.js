import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/product.css"

function ShopItem(item) {
  const { id, title, price, description, category, image } = item;
  return (
    <Grid item xs={2} sm={4} md={4}>
      <div className="product-card">
        <Link to={`/products/1`}>          
          <img src={image} width={250} height={250} className="product-image" alt="product"/>
          <p className="product-name">{title}</p>
        </Link>
        <p className="product-price">${price}</p>
        <button className="btn">Add to Cart</button>
      </div>
    </Grid>
  );
}

export default ShopItem;
