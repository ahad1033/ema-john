import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {

    const products = useLoaderData();
    console.log(products);

    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h3>Orders Page: {products.length}</h3>
            </div>
            <div className='cart-container'>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Orders;