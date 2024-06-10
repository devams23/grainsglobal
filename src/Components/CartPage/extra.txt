import React , {useEffect , useState} from "react";
import "./CartPage.css";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
//import lentilImage from './lentil.jpg'; // Make sure to have this image in your project

const CartPage = () => {
  const lentilImage = "one.jpg";
  const [cartitems, setcartitems] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [iscartempty, setiscartempty] = useState(true)

  useEffect(() => {
    let cart = localStorage.getItem('CartItems');
    if (cart) {
      cart = JSON.parse(cart);
      setcartitems(cart);
      const totalprice = Math.round(cart.reduce((total , current)=>{
        return total + current.price;
      } ,0) * 100 )/100;
      console.log(totalprice)
      settotalPrice(totalprice);
      setiscartempty(false)
    } else {
      cart = [];
      settotalPrice(0);
      setiscartempty(true);
    }

  }, []);
  
  function buynowhandle() {
    setShowModal(true);
  }

  return (
  <>
    <div className="cart-heading"> 
      <h1>Your Cart</h1>
    </div>
    <div className="cart-container">
      {iscartempty ? (
        // Render a component indicating the cart is empty
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to={"/products/cereals"} className="nav-button">Continue Shopping</Link>
        </div>
      ) : (
        // Render the cart items if the cart is not empty
        <>
          <div className="cart-items">
            {cartitems && cartitems.length > 0 && (
              cartitems.map((cartitem )=>(
                <div className="cart-item" key={cartitem.name}>
                  <img src={lentilImage} alt="Yellow Lentil" />
                  <div className="item-details">
                    <span>{cartitem.name}</span>
                  </div>
                  <div className="item-details">
                    <span>${cartitem.price}/kg</span>
                  </div>
                </div>
              ))
            )}
          </div>
        
          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>
              <span className="label">Order Total</span>
              <span className="value">${totalPrice}</span>
            </p>
            <p>
              <span className="label">Discount</span>
              <span className="value">-$0</span>
            </p>
            <p className="total">
              <span className="label">Total</span>
              <span className="value">${totalPrice}</span>
            </p>
          </div>
          <div className="bottom-nav">
            <span>Total ({cartitems.length} ITEMS) : ${totalPrice}</span>
            <div>
              <Link to={"/products"} className="nav-button">Continue Shopping</Link>
              <button className="nav-button" onClick={buynowhandle}>Buy Now</button>
            </div>
          </div>
        </>
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Service Under Development</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This service is currently under development. Please check back later.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  </>
);

};
export default CartPage;
