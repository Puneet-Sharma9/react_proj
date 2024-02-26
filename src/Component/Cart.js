import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  // Ensure cart is always initialized as an array
  const initialCartState = cart || [];

  const increaseQuantity = (id) => {
    const updatedCart = initialCartState.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = initialCartState.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  return (
    <>
      <div className='container my-5' style={{ width: "50%" }}>
        {initialCartState.length === 0 ? (
          <div className='text-center'>
            <h1>Your cart is empty</h1>
            <Link to="/" className='btn btn-warning'>Continue shopping...</Link>
          </div>
        ) : (
          initialCartState.map((product, index) => (
            <div key={index} className="card mb-3 my-5" style={{ maxWidth: 540 }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p>Quantity: {product.quantity}</p>
                    <button className="btn btn-primary mx-3">{product.price}{" "}₹</button>
                    <button className="btn btn-warning mx-2" onClick={() => decreaseQuantity(product.id)}>-</button>
                    <button className="btn btn-warning mx-2" onClick={() => increaseQuantity(product.id)}>+</button>
                    <button className="btn btn-warning">Buy now</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {initialCartState.length !== 0 && (
        <div className='container text-center my-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button className='btn btn-warning mx-5'>Checkout</button>
          <button onClick={() => setCart([])} className='btn btn-danger'>Clear Cart</button>
        </div>
      )}
    </>
  );
};

export default Cart;
