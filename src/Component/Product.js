import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ items, cart, setCart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
      // If the item already exists in the cart, increase its quantity by 1
      const updatedCart = cart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      const newItem = { id, price, title, description, imgSrc, quantity: 1 };
      setCart([...cart, newItem]);
    }

    toast.success('Item added to cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className='container my-5'>
        <div className='row'>
          {items.map((product) => (
            <div key={product.id} className='col-lg-4 col-md-6 my-3 text-center'>
              <div className="card" style={{ width: "18rem" }}>
                <Link to={`/product/${product.id}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={product.imgSrc} className="card-img-top" alt="images" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary mx-3">{product.price}{" "}₹</button>
                  <button onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)} className="btn btn-warning">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
