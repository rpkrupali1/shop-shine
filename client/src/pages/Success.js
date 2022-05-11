import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
// import Jumbotron from '../component/Jumbotron';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import { BsBagCheckFill } from "react-icons/bs";
import '../assets/styles/successCancel.css'

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      // setTimeout(() => {
      //   window.location.assign('/');
      // }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div className="success-wrapper">
      {/* <Jumbotron> */}
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@shopshine.com">
            order@shopshine.com
          </a>
        </p>
        <a href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </a>
      </div>
      {/* </Jumbotron> */}
    </div>
  );
}

export default Success;