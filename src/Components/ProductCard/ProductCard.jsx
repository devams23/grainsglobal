import React, { useState , useEffect } from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setcartvalue } from '../../store/AuthSlice';
//import { useCart } from '../../context/cartcontext';
import { Modal } from 'react-bootstrap';

function ProductCard({ imageUrl, name, price }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [carttext, setcarttext] = useState("Add to Cart");
  const [isHovered, setIsHovered] = useState(false);
  //const {addcartquantity}  =  useCart();
  const styles = {
    card: {
      border: '1px solid #438569',
      borderRadius: '10px',
      padding: '10px',
      width: '200px',
      backgroundColor: '#226B43',
      textAlign: 'center', // Ensure text is centered
    },
    productImage: {
      borderRadius: '10px',
      width: '100%',
      height: '200px', // Fixed height
      objectFit: 'cover',
      marginBottom: '10px', // Add margin to separate image from text
    },
    price: {
      color: '#fff',
      marginBottom: '10px',
      fontSize: '1.2em',
    },
    buttonStyle : {
      color: '#fff',
      backgroundColor: isHovered ? 'rgba(39, 37, 37, 0.5)' : 'rgba(39, 37, 37, 0.26)',
      width: '100%',
      cursor: 'pointer'
    }

  };

  useEffect(() => {
    const newItem = { imageUrl, name, price };
    let cart = localStorage.getItem('CartItems');
    
    if (cart) {
      cart = JSON.parse(cart);
    } else {
      cart = [];
    }
  
    // Check if the newItem already exists in the cart
    const itemExists = cart.some(item => item.name === newItem.name);
  
    if (!itemExists) {
      setcarttext("Add to Cart")
    } else {

      setcarttext("Added")
    }
  }, [])
  

  function addToCart() {
    const newItem = { imageUrl, name, price };
    let cart = localStorage.getItem('CartItems');
    
    if (cart) {
      cart = JSON.parse(cart);
    } else {
      cart = [];
    }
  
    // Check if the newItem already exists in the cart
    const itemExists = cart.some(item => item.name === newItem.name);
  
    if (!itemExists) {
      cart.push(newItem);
      dispatch(setcartvalue(cart.length));
      localStorage.setItem('CartItems', JSON.stringify(cart));
      console.log('Item added to cart:', newItem);
      setShowModal(true)
      setcarttext("Added")
    } else {

      setShowModal(false)
    }
  }
  

  return (
    <> 
    <Card style={styles.card}>
      <Image src={imageUrl} alt={name} style={styles.productImage} fluid />
      <h4 style={{ color: '#fff' }} className="text-center mt-3">
        {name}
      </h4>
      <p style={styles.price}>${price.toFixed(2)}</p>
      <Button 
            style={styles.buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={addToCart}
            variant="outline-light"
            disabled={carttext === "Added"}

          >
            {carttext}
          </Button>
    </Card>
    <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Item added to cart.</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="success" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>


  );
}

export default ProductCard;
