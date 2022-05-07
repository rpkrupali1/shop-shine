import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import "../assets/styles/product.css"

const product = {
  id: 5,
  title:
    "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  price: 695,
  description:
    "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  category: "jewelery",
  image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  rating: {
    rate: 4.6,
    count: 400,
  },
};

function Detail() {
  //const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const [qty, setQty] = useState(0);
  return (
    <Grid
      container
      direction="row"
      spacing={0}
      justifyContent="center"
      alignItems="center"
      className="product-detail-container"
    >
      <Grid item xs={6} className="image-container">
        <img
          src={product.image}
          className="product-detail-image"
          alt="productImage"
        />
      </Grid>
      <Grid item xs={6} className="product-detail-desc">
        <h1>{product.title}</h1>
        <div className="reviews">
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>(20)</p>
        </div>
        <h4>Details: </h4>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <div className="quantity">
          <h3>Quantity:</h3>
          <p className="quantity-desc">
            <span className="minus" onClick={() => setQty(qty - 1)}>
              <AiOutlineMinus />
            </span>
            <span className="num">{qty}</span>
            <span className="plus" onClick={() => setQty(qty + 1)}>
              <AiOutlinePlus />
            </span>
          </p>
        </div>
        <div className="buttons">
          <button type="button" className="add-to-cart">
            Add to Cart
          </button>
          <button type="button" className="buy-now">
            Buy Now
          </button>
        </div>
      </Grid>
    </Grid>
  );
}

export default Detail;
