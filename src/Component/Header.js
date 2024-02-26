import {React} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { items } from './Data';
import { useState } from 'react';

const Header = ({setData,cart}) => {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    const filterByCategory = (category) => {
        const element = items.filter((product) => product.category === category)
        // console.log(element);
        setData(element);
    }
    const filterByPrice = (price) => {
        const element = items.filter((product) => product.price >= price)
        
        setData(element);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
        setSearchTerm("");
    }
  return (
    <>
        <header className='sticky-top'>
            <div className='nav-bar'>
                <Link to = {'/'} className='brand'> E-cart </Link>
            
                <form 
                    onSubmit={handleSubmit} className='search-bar'>
                    <input 
                        type='text' 
                        placeholder='search here'
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value = {searchTerm}
                     />
                </form>

                <Link to={'/cart'} className='cart'>
                    <button type="button" className="btn btn-primary position-relative">
                    Cart
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart.length}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    </button>
                </Link>
            </div>
        <div className='nav-bar-wrapper'>
            <div className='items'>Filter By {"->"}</div>
            <div onClick={() => setData(items) } className='items'>No filter</div>
            <div onClick={() => filterByCategory('mobiles')} className='items'>Mobiles</div>
            <div onClick={() => filterByCategory('laptops')} className='items'>Laptops</div>
            <div onClick={() => filterByCategory('tablets')} className='items'>Tablets</div>
            {/* <div className='items'>Laptops</div> */}
            {/* <div className='items'>Tablet</div> */}
            <div onClick={() => filterByPrice(29000)} className='items'>{">=29000"}</div>
            <div onClick={() => filterByPrice(49000)} className='items'>{">=49000"}</div>
            <div onClick={() => filterByPrice(59000)} className='items'>{">=59000"}</div>
            <div onClick={() => filterByPrice(69000)} className='items'>{">=69000"}</div>
            {/* <div className='items'>{">=59000"}</div>
            <div className='items'>{">=69000"}</div> */}
            
        </div>
        </header>
    </>
  )
}

export default Header