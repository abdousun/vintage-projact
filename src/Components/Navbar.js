import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../Images/logo.png';
import ListXs from './ListXs';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  function handleDivclick() {
    if (isListVisible) {
      setIsListVisible(false);
    }
  }

  return (
    <div className='Navbar' onClick={handleDivclick}>
      <FontAwesomeIcon className='ic-1' icon={faBars} onClick={toggleListVisibility} />
      <div className='brand'>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit',display:"flex" }}>
          <img className='logo' src={logo} alt='logo vintage clothes' />
          <h1 className='title'>Vintage Clothes</h1>
        </Link>
      </div>
      <div className='btn1'>
        <Link to="/AddClient" className="btn btn-dark" style={{ marginRight: '5px', borderRadius: '20px' }}>Register</Link>
        <Link to="/Content"  className="btn btn-dark" style={{ borderRadius: '20px' }}>AddProduct</Link>
      </div>
      {isListVisible && <ListXs />}
    </div>
  );
}

export default Navbar;
