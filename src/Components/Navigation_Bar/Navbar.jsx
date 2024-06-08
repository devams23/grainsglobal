import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
//import { useCart } from '../../context/cartcontext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartitems = useSelector((state) => state.auth.cart);
  const [cartItems, setcartItems] = useState(0);
  //const {cartquantity} = useCart();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    let cart = localStorage.getItem("CartItems");
    if (cart) {
      cart = JSON.parse(cart);
      setcartItems(cart.length);
    } else {
      setcartItems(cartitems);
    }
  }, [cartitems]);

  return (
    <nav className={`navvbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="navvbar-container">
        <div className="navvbar-links">
          <NavLink to="/"  className={({isActive}) => (isActive ? "active" : 'none')}>
            Home
          </NavLink>
          <NavLink to="/products/cereals" className={({isActive}) => (isActive ? "active" : 'none')}>
            Products
          </NavLink>
          <NavLink to="/about" className={({isActive}) => (isActive ? "active" : 'none')}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : 'none')}>
            Contact Us
          </NavLink>
        </div>
        <div className="navvbar-actions">
          <NavLink to="/cart" id="cartlink">
            <div className="cart-icon">
              <FaShoppingCart />
              <div className="notification-circle">{cartItems}</div>
            </div>
          </NavLink>
          <button className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* Conditionally render login button based on screen size */}
          <Button text="Login" redirect="login" />
        </div>
      </div>
      {menuOpen && (
        <div className="navvbar-mobile">
          <NavLink to="/" className={({isActive}) => (isActive ? "active" : 'none')} onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/products" className={({isActive}) => (isActive ? "active" : 'none')} onClick={toggleMenu}>
            Products
          </NavLink>
          <NavLink to="/about" className={({isActive}) => (isActive ? "active" : 'none')} onClick={toggleMenu}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : 'none')} onClick={toggleMenu}>
            Contact Us
          </NavLink>
          {/* Render login link inside hamburger menu */}
          <NavLink
            to="/login"
            className="login-link-mobile"
            onClick={toggleMenu}
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
