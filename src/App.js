import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Component/Header';
import Product from './Component/Product';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductDetails from './Component/ProductDetails';
import SearchItem from './Component/SearchItem';
import Cart from './Component/Cart';
import { items } from './Component/Data';
import { useState } from 'react';


function App() {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
    {/* <Header />
    <Product /> */}
    
    <Router>
      <Header cart={cart} setData={setData}/>
      <Routes>
        <Route path='/' element={<Product cart={cart} setCart = {setCart} items={data}/>}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/search/:term' element={<SearchItem />}/>
        <Route path='/cart' element={<Cart cart={cart} setCart = {setCart} />}/>

      </Routes>
      
    </Router>
    </>
    );
}

export default App;
