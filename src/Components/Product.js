import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Content.css';

function Product({ id, description, image_url, price, addToCart }) {
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
                <img src={image_url} alt={description} style={{height:"300px"}} />
            </div>
            <div className='box'>
                <h5 className='prTitle'>{description}</h5>
                <h2 className='prPrice'>Price: {price}$</h2>

             
                {addToCart && ( // Render the button only if addToCart is true
                    <button className='btn-panier' onClick={() => addToCart(id, description, price)}>
                        Ajouter au panier
                    </button>
                )}

            </div>
        </div>
    );
}

export default Product;
