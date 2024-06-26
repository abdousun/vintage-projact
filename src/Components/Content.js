import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import PanierAchat from './PanierAchat';
import './Content.css';
import AddProduct from './AddProduct';

function Content() {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState({}); // Initialize products with the data

    useEffect(() => {
         axios.get('http://localhost/produit-microservice/public/api/produits')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            }); 
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

    const addProductToList = async (newProduct) => {
        const response = await fetch('http://localhost/produit-microservice/public/api/produits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        });
        if (response.ok) {
            console.log('product added successfully');
            // Optionally, you can handle success response here
            // For example, clear the form fields
           
        } else {
            console.error('Failed to add product');
            // Optionally, you can handle error response here
        }
        setProducts([...products, newProduct]);
    };

 

    return (
        <div className='cont'>
   <AddProduct onAddProduct={addProductToList} /> {/* Pass the function as a prop */}

            <div className='container'>
                {products.map((product) => (
                    <Product
                        key={product._id}
                        id={product._id}
                        description={product.description}
                        image={product.image_url}
                        price={product.price}
                        addToCart={false}
                    />
                ))}
            </div>

        </div>
    );
}

export default Content;
