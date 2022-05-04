import { CardMedia } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";

function ShopItem(item) {
  const { title, price, description, category, image } = item;
  return (
    <Grid item xs>
      <a href="/">
        <CardMedia image={image} component="img">
          {/* <img alt="productImage" src={image} /> */}
        </CardMedia>
        <p>{title}</p>
      </a>
      <p>{description}</p>
      <p>${price}</p>
      <button>Add to Cart</button>
    </Grid>
  );
}

export default ShopItem;
