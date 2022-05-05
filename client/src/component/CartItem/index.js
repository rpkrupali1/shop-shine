import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

function CartItem({ item }) {
  const [qty, setQty] = useState(0);
  return (
    <div>
      <div>
        <img src={item.image} alt="shopping product" />
      </div>
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
      <button type="button" className="remove-item">
        <TiDeleteOutline />
      </button>
      <div className="subtotal">
        <div>Subtotal:</div>
        <div>$100</div>
      </div>
      <div>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default CartItem;
