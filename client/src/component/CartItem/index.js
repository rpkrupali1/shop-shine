import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import "../../assets/styles/product.css";

function CartItem({ item }) {
  const [qty, setQty] = useState(0);

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    
    <Grid container>
      <Grid item xs>
        
        <img
          src={`/images/${item.image}`}
          alt="shopping product"
          className="image-container"
          width={250}
            height={250}
        />
      </Grid>

      <Grid item xs={4}>
        <div>
          <div>{item.name}</div>
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
        <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
      </Grid>
    </Grid>
 
  );
}

export default CartItem;
