import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import Button from '../Button/Button';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navvbar ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navvbar-container">
        <div className="navvbar-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <NavLink to={"/some"}>
              fd 
          </NavLink>
        </div>
        <div className="navvbar-actions">
          <a href="/cart" id='cartlink'>
          <div className="cart-icon ">
          <FaShoppingCart/>
          <div className="notification-circle">{0}</div>
        </div>
          </a>
          <button className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* Conditionally render login button based on screen size */}
          <Button text='Login' redirect='login' />
        </div>
      </div>
      {menuOpen && (
        <div className="navvbar-mobile">
          <a href="/" onClick={toggleMenu}>Home</a>
          <a href="/products" onClick={toggleMenu}>Products</a>
          <a href="/about" onClick={toggleMenu}>About Us</a>
          <a href="/contact" onClick={toggleMenu}>Contact Us</a>
          {/* Render login link inside hamburger menu */}
          <a href="/login" className="login-link-mobile" onClick={toggleMenu}>Login</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
