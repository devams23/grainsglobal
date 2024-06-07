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
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
          <NavLink to="/products" activeClassName="active">Products</NavLink>
          <NavLink to="/about" activeClassName="active">About Us</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
        </div>
        <div className="navvbar-actions">
          <NavLink to="/cart" id="cartlink">
            <div className="cart-icon">
              <FaShoppingCart />
              <div className="notification-circle">{1}</div>
            </div>
          </NavLink>
          <button className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* Conditionally render login button based on screen size */}
          <Button text='Login' redirect='login' />
        </div>
      </div>
      {menuOpen && (
        <div className="navvbar-mobile">
          <NavLink to="/" exact activeClassName="active" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/products" activeClassName="active" onClick={toggleMenu}>Products</NavLink>
          <NavLink to="/about" activeClassName="active" onClick={toggleMenu}>About Us</NavLink>
          <NavLink to="/contact" activeClassName="active" onClick={toggleMenu}>Contact Us</NavLink>
          {/* Render login link inside hamburger menu */}
          <NavLink to="/login" className="login-link-mobile" onClick={toggleMenu}>Login</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
