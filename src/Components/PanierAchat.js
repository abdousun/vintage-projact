import React, { useState } from 'react';
import './PanierAchat.css';

export default function PanierAchat({ cart, setCart }) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const calculateTotalPrice = (item) => {
        return item.qty * item.price;
    };

    const totalPrice = cart.reduce((total, item) => total + calculateTotalPrice(item), 0);

    const handleIncreaseQuantity = (itemId) => {
        const updatedCart = cart.map((item) =>
            item.id === itemId ? { ...item, qty: item.qty + 1 } : item
        );
        setCart(updatedCart);
    };

    const handleDecreaseQuantity = (itemId) => {
        const updatedCart = cart.map((item) => {
            if (item.id === itemId && item.qty > 0) {
                return { ...item, qty: item.qty - 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const handleRemoveProduct = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    };

    return (
        <div className="Panier">
            <button className="toggle-cart-btn" onClick={() => setIsCartOpen(!isCartOpen)}>
            {isCartOpen ? 'panier' : `panier: ${cart.length}`}
            </button>
            <div className={`panier-content ${isCartOpen ? 'open' : ''}`}>
                {isCartOpen && (
                    <div>
                        <h1>Panier</h1>
                        <div>
                            <ul>
                                {cart.map((item) => (
                                    <li key={item.id}>
                                        <div className="cart-item">
                                            <div className="cart-item-details">
                                                <p>{item.title} - Quantité: {item.qty} : <br /> Prix total: ${calculateTotalPrice(item)}</p>
                                                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                                <button className="remove" onClick={() => handleRemoveProduct(item.id)}>remove</button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <button type="button" className="btn btn-success btn-commander">Commander ({totalPrice}$)</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
