import React from "react";
import "./CartPage.css";
//import lentilImage from './lentil.jpg'; // Make sure to have this image in your project

const CartPage = () => {
  const lentilImage = "one.jpg";
  return (
    <>
    <div className="cart-heading"> 
    <h1 className="text-4xl">Your Cart</h1>

    </div>
    <div className="cart-container">
      <div className="cart-items">
        <div className="cart-item">
          <img src={lentilImage} alt="Yellow Lentil" />
          <div className="item-details">
            <span>Yellow Lentil</span>
          </div>
          <div className="item-details">
            <span>$89.00/kg</span>
          </div>
        </div>
        <div className="cart-item">
          <img src={lentilImage} alt="Yellow Lentil" />
          <div className="item-details">
            <span>Yellow Lentil</span>
          </div>
          <div className="item-details">
            <span>$89.00/kg</span>
          </div>
        </div>
        <div className="cart-item">
          <img src={lentilImage} alt="Yellow Lentil" />
          <div className="item-details">
            <span>Yellow Lentil</span>
          </div>
          <div className="item-details">
            <span>$89.00/kg</span>
          </div>
        </div>
        <div className="cart-item">
          <img src={lentilImage} alt="Yellow Lentil" />
          <div className="item-details">
            <span>Yellow Lentil</span>
          </div>
          <div className="item-details">
            <span>$89.00/kg</span>
          </div>
        </div>
        <div className="cart-item">
          <img src={lentilImage} alt="Yellow Lentil" />
          <div className="item-details">
            <span>Yellow Lentil</span>
          </div>
          <div className="item-details">
            <span>$89.00/kg</span>
          </div>
        </div>
        <div className="cart-item">
          <img src={lentilImage} alt="Yellow Lentil" />
          <div className="item-details">
            <span>Yellow Lentil</span>
          </div>
          <div className="item-details">
            <span>$89.00/kg</span>
          </div>
        </div>
        <div className="cart-item">
          <img src={lentilImage} alt="Yellow Lentil" />
          <div className="item-details">
            <span>Yellow Lentil</span>
          </div>
          <div className="item-details">
            <span>$89.00/kg</span>
          </div>
        </div>
    </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>Order Total: $267</p>
        <p>Discount: -$0</p>

        <p>Total: $267</p>
      </div>
    </div>
       <div className="bottom-nav">
          <span>Total (3 ITEMS) : $267</span>
          <div>
             <button>Continue Shopping</button>
              <button>Buy Now</button>
          </div>
      </div>
    </>
  );
};

export default CartPage;
