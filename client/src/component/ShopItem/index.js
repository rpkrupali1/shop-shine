import { CardMedia } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function ShopItem(item) {
  const { id, title, price, description, category, image } = item;
  return (
    <Grid item xs>
      <Link to={`/products/1`}>
        <CardMedia image={image} component="img">
          {/* <img alt="productImage" src={image} /> */}
        </CardMedia>
        <p>{title}</p>
      </Link>
      <p>{description}</p>
      <p>${price}</p>
      <button>Add to Cart</button>
    </Grid>
  );
}

export default ShopItem;
