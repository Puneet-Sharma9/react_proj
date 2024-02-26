//old code of cart.js and product.js

import React from 'react'
import { Link } from 'react-router-dom'
// const Cart = ({cart,setCart}) => {
  return (
    <>
        <div className='container my-5' style={{width: "50%"}}>
            {
            cart.length===0 ?(
                <>
                <div className='text-center'>
                    <h1>your cart is empty</h1>
                    <Link to = {"/"} className='btn btn-warning'>continue shopping...</Link>
                </div>
                </>
            ):
            cart.map((product) =>{
                return (
                    <>
                        <div className="card mb-3 my-5" style={{ maxWidth: 540 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body text-center">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">
                            {product.descritption}
                            </p>
                            <button className="btn btn-primary mx-3">{product.price}{" "}₹</button>
                            <button className="btn btn-warning">Buy now</button>
                        </div>
                        </div>
                    </div>
                    </div>

                    </>
                )
            } )}

        </div>
          {
            cart.length !== 0 && (
        <div className='container text-center my-5' style={{display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
            <button className='btn btn-warning mx-5'>CheckOut</button>
            <button onClick={() => setCart([])} className='btn btn-danger'>Clear Cart</button>
        </div>
            )
          }
    </>
  )
// }

// export default Cart

















import React from 'react'
// import { items } from './Data';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const Product = ({items, cart, setCart}) => {
    const addToCart = (id,price,title,description,imgSrc) => {
        // const existingItem = cart.find(item => item.id === id)
        // if(existingItem){
        //     const updatedCart = cart.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item )
        //     setCart(updatedCart)
        // }
        // else{
        //     const obj = {id,price,title,description,imgSrc}
        //     setCart([...cart,obj]);
        // }
        // const obj = {id,price,title,description,imgSrc}
        // setCart([...cart,obj]);
        console.log("cart elements ",cart);
        toast.success('item is added to cart', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
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
            {
                items.map((product) =>{
                    return(
                        <>
                            <div key={product.id} className='col-lg-4 col-md-6 my-3 text-center'>
                            <div className="card" style={{ width: "18rem" }}>
                            <Link to={`/product/${product.id}`} style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <img src={product.imgSrc} className="card-img-top" alt="images" />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">
                                {product.description}
                                </p>
                                <button className="btn btn-primary mx-3">{product.price}{" "}₹</button>
                                <button 
                                onClick={()=> addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}
                                className="btn btn-warning">add to cart</button>
                            </div>
                           </div>
                           </div>
                        </>
                    )
                })
            }
            </div>
        </div>
    </>
  )
// }

// export default Product