import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom' ; import './AddProduct.css';

const AddProduct = ({ onAddProduct }) => {
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image_url, setUrlImg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            type:"type",
            reference: "ref",
            description,
            price,
            image_url,
        };
        onAddProduct(newProduct); 
        setDescription('');
        setPrice('');
        setUrlImg('');
        navigate("/Content")
    };

    return (
        <form className="add-product-form" onSubmit={handleSubmit}>
            <h1>Add Product</h1>
            <label>
                Title:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <label>
                URL:
                <input type="text" value={image_url} onChange={(e) => setUrlImg(e.target.value)} />
            </label>
            <button className="add-product-btn" type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
