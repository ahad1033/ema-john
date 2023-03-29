import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getShoppingCart } from '../../utilities/fakedb'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( ()=>{
        // fetch('products.json')
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    

    const handelAddToCart = (product) => {
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb (product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product ={product}
                        handelAddToCart = {handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;