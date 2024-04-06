// AddClient.js

import React, { useState } from 'react';
import './AddClient.css';

const AddClient = ({ onAddClient }) => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newClient = {
            fullName,
            phoneNumber,
            address,
            city,
        };
        try {
            // Make an HTTP POST request to your backend API
            const response = await fetch('/api/clients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newClient),
            });
            if (response.ok) {
                console.log('Client added successfully');
                // Optionally, you can handle success response here
                // For example, clear the form fields
                setFullName('');
                setPhoneNumber('');
                setAddress('');
                setCity('');
            } else {
                console.error('Failed to add client');
                // Optionally, you can handle error response here
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle network error or other errors
        }
    };

    return (
        <form className="add-client-form" onSubmit={handleSubmit}>
            <label>
                Full Name:
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </label>
            <label>
                Phone Number:
                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </label>
            <label>
                Address:
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
            <label>
                City:
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </label>
            <button className="add-client-btn" type="submit">Add Client</button>
        </form>
    );
};

export default AddClient;
