import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';
import { Grid } from "@material-ui/core";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import "../assets/styles/product.css"

function Detail() {
  const [qty, setQty] = useState(0);
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <Grid
      container
      direction="row"
      spacing={0}
      justifyContent="center"
      alignItems="center"
      className="product-detail-container"
    >
    
      {currentProduct && cart ? (
        <div className=" container my-1">
          <Link to="/">← Back to Shop</Link>
         
          <Grid item xs={6} className="image-container">
          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
            className="product-detail-image"
          />
          </Grid>

         
          <Grid item xs={6} className="product-detail-desc">
            <h1>{currentProduct.name}</h1>
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
            <p>{currentProduct.description}</p>

            <p className="price">${currentProduct.price}{' '}</p>

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
              <button type="button" className="add-to-cart" onClick={addToCart}>
                Add to Cart
              </button>
              <button type="button" className="add-to-cart"
                disabled={!cart.find((p) => p._id === currentProduct._id)}
                onClick={removeFromCart}
              >
                Remove from Cart
              </button>
            </div>
          </Grid>
          </div>
      ) : null}
        {loading ? <img src={spinner} alt="loading" /> : null}
  </Grid>
  
  );
}

export default Detail;