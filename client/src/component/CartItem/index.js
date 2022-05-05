import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

function CartItem({ item }) {
  const [qty, setQty] = useState(0);
  return (
    <Grid container>
      <Grid item xs>
        <img src={item.image} alt="shopping product" className="image-container"/>
      </Grid>
      <Grid item xs={4}>
        <div>
          <div>{item.title}</div>
          <div>{item.price}</div>
        </div>
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
      </Grid>
      <Grid item xs>
      <button type="button" className="remove-item">
          <TiDeleteOutline />
        </button>
      </Grid>
    </Grid>
  );
}

export default CartItem;
