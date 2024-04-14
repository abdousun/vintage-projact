import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import PanierAchat from './PanierAchat';
import './Content.css';

function Content() {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState({}); // Initialize products with the data


    useEffect(() => {
        /* axios.get('url')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            }); */
    }, []);

    const handleAddToCart = (id, description, price) => {
        const checkProduct = cart.find((p) => p.id === id);

        if (checkProduct) {
            setCart((prev) =>
                prev.map((product) =>
                    product.id === id ? { ...product, qty: product.qty + 1 } : product
                )
            );
        } else {
            const productToAdd = { id, description, price, qty: 1 };
            setCart((prev) => [...prev, productToAdd]);
        }
    };


 

    return (
        <div className='cont'>

            <div className='container'>
                {products.map((product) => (
                    <Product
                        key={product._id}
                        id={product._id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        addToCart={handleAddToCart}
                    />
                ))}
            </div>
            <PanierAchat cart={cart} setCart={setCart} />

        </div>
    );
}

export default Content;
