import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Content.css';

function Product({ id, title, image, price, addToCart }) {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    };

    return (
        <div className='prod1'>
            <div className='pr1'>
                <FontAwesomeIcon
                    onClick={handleClick}
                    className={`heartIcon ${liked ? 'heartLiked' : ''}`}
                    icon={faHeart}
                />
                <img src={image} alt={title} style={{height:"300px"}} />
            </div>
            <div className='box'>
                <h5 className='prTitle'>{title}</h5>
                <h2 className='prPrice'>Price: {price}$</h2>
                <button className='btn-panier' onClick={() => addToCart(id, title, price)}>
                    Ajouter au panier
                </button>
            </div>
        </div>
    );
}

export default Product;
