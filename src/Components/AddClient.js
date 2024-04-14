// AddClient.js

import React, { useState } from 'react';
import './AddClient.css';

const AddClient = ({ onAddClient }) => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');

    const [phone_number, setPhoneNumber] = useState('');
    const [adresse, setAddress] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newClient = {
            first_name,
            last_name,
            phone_number,
            adresse,
            city,
        };
        try {
            // Make an HTTP POST request to your backend API
            const response = await fetch('http://localhost/client-microservice/public/api/clients', {
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
                setFirstName('');
                setLastName('');
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
                nom:
                <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <label>
                prénom:
                <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />
            </label>
            <label>
                Phone Number:
                <input type="tel" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} />
            </label>
            <label>
                Address:
                <input type="text" value={adresse} onChange={(e) => setAddress(e.target.value)} />
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
