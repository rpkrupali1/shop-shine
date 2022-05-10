import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import "../../assets/styles/product.css";

function CartItem({ item }) {
  const [qty, setQty] = useState(item.purchaseQuantity);
  //const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    //const value = e.target.value;
    const value = qty
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  const incQty = () => {
    setQty(qty + 1);
    onChange()
  };

  const decQty = () => {
    setQty((qty) => (qty === 1 ? qty : qty - 1));
    onChange();
  };

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
            <span className="minus" onClick={() => decQty()}>
              <AiOutlineMinus />
            </span>
            <span className="num" onChange={onChange}>
              {item.purchaseQuantity}
            </span>
            <span className="plus" onClick={() => incQty(qty + 1)}>
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
