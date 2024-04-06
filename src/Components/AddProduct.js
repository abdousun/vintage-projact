import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = ({ onAddProduct }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [urlImg, setUrlImg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            urlImg,
        };
        onAddProduct(newProduct); 
        setTitle('');
        setPrice('');
        setUrlImg('');
    };

    return (
        <form className="add-product-form" onSubmit={handleSubmit}>
                   <h1>Add Product</h1>

            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <label>
                URL:
                <input type="text" value={urlImg} onChange={(e) => setUrlImg(e.target.value)} />
            </label>
            <button className="add-product-btn" type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct