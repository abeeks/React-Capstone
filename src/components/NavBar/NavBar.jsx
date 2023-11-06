import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import './NavBar.css';
import Dropdown from './Dropdown';

const NavBar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    }

  return (
    <div className='navbar-wrapper'>
        <div className='navbar-contents'>
            <a href='https://khaite.com/collections/shop' 
            alt='Shop' className='navbar-left'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>Shop</a>
            {isDropdownVisible && <Dropdown />}
            <a href='https://khaite.com/collections/curated-selections' alt='Selected For You' className='navbar-left'>Selected For You</a>
            <a href='https://khaite.com/pages/khaitexbonpoint' alt='KHAITE x Bonpoint' className='navbar-left'>KHAITE x Bonpoint</a>

            <a href='https://khaite.com/' alt='KHAITE' className='logo'>KHAITE</a>
            
            <PanoramaFishEyeIcon className='navbar-right cart-icon'/>
            <SearchIcon className='navbar-right search-icon'/>
            <a href='https://khaite.com/account/login' alt='Account' className='navbar-right'>Account: <u>Sign In</u></a>
            <a href='https://khaite.com/pages/ny-store' alt='Store' className='navbar-right'>Store</a>
            <a href='https://khaite.com/pages/about' alt='About' className='navbar-right'>About</a>
            <a href='' alt='Shipping' className='navbar-right'>Ship to: United States</a>
        </div>
    </div>
  )
}

export default NavBar