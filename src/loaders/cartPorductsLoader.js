import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    //if cart data is in the database, you have to use async await
    const storedCart = getShoppingCart();
    console.log(storedCart);

    console.log(products);
    return products;
}

export default cartProductsLoader;