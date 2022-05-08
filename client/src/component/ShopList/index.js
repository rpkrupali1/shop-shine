
import ShopItem from "../ShopItem";
import { Grid } from "@material-ui/core";
import "../../assets/styles/product.css";
import CategoryMenu from "../CategoryMenu";

import React, { useEffect } from 'react';

import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';




function ShopList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }
  return (
    <div className="shop-list cardshop">
      <div className="products-heading">
        <CategoryMenu />
        
        <p>There are many variations</p>
      </div>
      <Grid
        container
        direction="row"
        // spacing={{ xs: 1, md: 2 }}
        rows={{ xs: 5, sm: 8, md: 12 }}
        className="products-container"
        wrap="wrap"
      >
        {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ShopItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3></h3>
      )}
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
      </Grid>
    </div>
  );
}

export default ShopList;
