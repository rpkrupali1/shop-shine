import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../../assets/styles/product.css";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ShopItem(item) {
  const [state, dispatch] = useStoreContext();

  const { _id, title, price, description, category, image } = item;
  
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
            src={image}
            width={250}
            height={250}
            className="product-image"
            alt="product"
          />
          <p className="product-name">{title}</p>
          
        </Link>
        <p className="product-price">${price}</p>
        <button className="btn" onClick={addToCart}>Add to Cart</button>
      </div>
    </Grid>
  );
}

export default ShopItem;
