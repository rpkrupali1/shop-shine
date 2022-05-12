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
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              
              <a className="navbar-brand page-scroll" href="/">
                Shop Shine
              </a>{" "}
            </div>
            <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
         <div className={click ? 'nav-menu active' : 'nav-menu'}>
              <ul className=" navbar-nav navbar-right size">
                <li>
                <Link to='/'  onClick={closeMobileMenu}>
                    Home
                  <i className='fab fa-firstdraft' /></Link>
                  
                </li>
                <li >
                  <a onClick={closeMobileMenu} href="/shop">Shop</a>
                </li>

                <li>
                  <Link onClick={closeMobileMenu} to="/contact">Contact</Link>
                </li>
                <li>
                  <Link onClick={closeMobileMenu} to="/orderHistory">Order History</Link>
                </li>
                <li >
                  <div className="nav-links2" onClick={closeMobileMenu}>
                  <a href="/" onClick={() => Auth.logout()}>
                    Logout
                  </a>
                  
                  </div>
                </li>
                <li>
                  <Link className="cart-icon" onClick={closeMobileMenu} to="/cart">
                    {/* <span role="img" aria-label="trash" className="cart-closed">
                      🛒
                    </span> */}
                    
                      <AiOutlineShoppingCart />
                      <span className="cart-item-qty">
                        {calculateTotalQuantity()}
                      </span>
                    
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top ">
          <div className="container">
            <div className="navbar-header">
              
              <a className="navbar-brand page-scroll" href="/">
                Shop Shine
              </a>{" "}
            </div>
            <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
         <div className={click ? 'nav-menu active' : 'nav-menu'}>
              <ul className=" navbar-nav navbar-right ">
                <li>
                <Link to='/'  onClick={closeMobileMenu}>
                    Home
                  <i className='fab fa-firstdraft' /></Link>
                  
                </li>
                <li >
                  <a onClick={closeMobileMenu} href="/shop">Shop</a>
                </li>

                <li>
                  <Link onClick={closeMobileMenu} to="/contact">Contact</Link>
                </li>
                <li>
                  <Link onClick={closeMobileMenu} to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link onClick={closeMobileMenu} to="/login">Login</Link>
                </li>
                
                <li>
                  <Link className="cart-icon" onClick={closeMobileMenu} to="/cart">
                    {/* <span role="img" aria-label="trash" className="cart-closed">
                      🛒
                    </span> */}
                    
                      <AiOutlineShoppingCart />
                      <span className="cart-item-qty">
                        {calculateTotalQuantity()}
                      </span>
                    
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
