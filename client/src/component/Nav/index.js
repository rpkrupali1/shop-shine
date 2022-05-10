import React, { useEffect, useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useStoreContext } from "../../utils/GlobalState";
import "../../assets/styles/nav.css";

function Nav(props) {
  const [state] = useStoreContext();
  // const [totaQuantity, setTotalQuantity] = useState();

  // useEffect(()=>{
  //   setTotalQuantity(calculateTotalQuantity());
  // })
  
  function calculateTotalQuantity() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.purchaseQuantity;
    });
    return sum;
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                {" "}
                <span className="sr-only">Toggle Nav</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
              </button>
              <a className="navbar-brand page-scroll" href="#page-top">
                Shop Shine
              </a>{" "}
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>

                <li>
                  <a href="/" onClick={() => Auth.logout()}>
                    Logout
                  </a>
                </li>
                <li>
                  <Link to="/cart">
                    {/* <span role="img" aria-label="trash" className="cart-closed">
                      🛒
                    </span> */}
                    <button type="button" className="cart-icon">
                      <AiOutlineShoppingCart />
                      <span className="cart-item-qty">
                        {calculateTotalQuantity()}
                      </span>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                {" "}
                <span className="sr-only">Toggle Nav</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
              </button>
              <a className="navbar-brand page-scroll" href="#page-top">
                Shop Shine
              </a>{" "}
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/cart">
                    <button type="button" className="cart-icon">
                      <AiOutlineShoppingCart />
                      <span className="cart-item-qty">
                        {calculateTotalQuantity()}
                      </span>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">-Shop Shine</Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
