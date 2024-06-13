import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Button, Offcanvas } from "react-bootstrap";
import BButton from "../Button/Button";
import { useSelector } from "react-redux";
import authservice from "../../appwrite/auth";
import { logoutstore } from "../../store/AuthSlice";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartitems = useSelector((state) => state.auth.cart);
  const userdetails = useSelector((state) => state.auth.userdata);
  const isloggedin = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const [cartItems, setcartItems] = useState(0);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

  const handleLogout = () => {
    authservice.signout().then(() => {
      dispatch(logoutstore());
    });
  };

  return (
    <nav className={`navvbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="navvbar-container">
        <div className="navvbar-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            Home
          </NavLink>
          <NavLink
            to="/products/cereals"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "none")}
          >
            Contact Us
          </NavLink>
        </div>
        <div className="navvbar-actions">
          <NavLink to="/cart" id="cartlink">
            <div className="cart-icon">
              <FaShoppingCart />
              <div className="notification-circle">{cartItems}</div>
            </div>
          </NavLink>{" "}
          {isloggedin && (
            <Button variant="primary" onClick={handleShow}>
              Account
            </Button>
          )}
          <BButton text="Login" redirect="login" invisible={isloggedin} />
          <button className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>User Account</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {userdetails ? (
                <div>
                  <p>
                    <strong>Name:</strong> {userdetails.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {userdetails.email}
                  </p>
                  <Button variant="danger" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <p>No user is signed in.</p>
              )}
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
      {menuOpen && (
        <div className="navvbar-mobile">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "none")}
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/products/cereals"
            className={({ isActive }) => (isActive ? "active" : "none")}
            onClick={toggleMenu}
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "none")}
            onClick={toggleMenu}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "none")}
            onClick={toggleMenu}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${isActive ? "active" : ""} ${isloggedin ? "invisible" : ""}`
            }
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
