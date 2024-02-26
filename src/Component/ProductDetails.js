import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'

const ProductDetails = () => {
    const {id} = useParams();
    
    const [product, setProduct] = useState({})
    const [relatedProducts, setrelatedProducts] = useState([])

    useEffect(() => {
        const filterProduct = items.filter((product) => product.id === id)
        // console.log(filterProduct);
        setProduct(filterProduct[0]);
        
        const relatedProducts = items.filter((pro)=> pro.category === product.category)
        //console.log(relatedProducts);
        setrelatedProducts(relatedProducts);
        },[id,product.category])
    
  return (
    <>
    {/* <div className='text-dark'> Product details- {id} </div> --> to show the id in this page that is coming from data*/}
        <div className='container con'>
            <div className='img'>
                <img src={product.imgSrc} alt=''/>
            </div>
            <div>
                <h1 className="card-title">{product.title}</h1>
                <p className="card-text">
                {product.description}
                </p>
                <button className="btn btn-primary mx-3">{product.price}{" "}₹</button>
                <button className="btn btn-warning">add to cart</button>
            </div>
        </div>
        <h1 className='text-center'>Related Products</h1>
        <Product items={relatedProducts} />
    </>
  )
}

export default ProductDetails