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

    useEffect( () =>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step 1: get id of the addedProduct
        for(const id in storedCart){
            //step 2: get product from products id by uning id
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                //step 3: add quantity
                const quantity= storedCart[id];
                addedProduct.quantity = quantity;
                //step 4: add the added cart to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log('addedProduct', addedProduct);
        }
        //step 5: set the cart
        setCart(savedCart);
    }, [products])

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