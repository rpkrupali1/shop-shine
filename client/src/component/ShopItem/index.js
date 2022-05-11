import React from "react";
import { Link } from "react-router-dom";

import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Grid } from "@material-ui/core";
import "../../assets/styles/product.css";

function ShopItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    description,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <Grid item xs>
      <div className="product-card">
        <Link to={`/products/${_id}`}>
          <img
            alt={name}
            src={`/images/${image}`}
            width={250}
            height={250}
          />
          <p className="product-name">{name}</p>
          
        </Link>
        <div>
          {/* <div>{quantity} {pluralize("item", quantity)} in stock</div> */}
          <span className="product-price">${price}</span>
        </div>
        <button className="btn" onClick={addToCart}>Add to cart</button>
      </div>
    </Grid>
  );
}

export default ShopItem;