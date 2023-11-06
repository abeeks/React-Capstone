import React from 'react';
import image1 from '/Users/student10/dev/labs/khaite-clone/src/images/SASMO_BONE.webp';
import image2 from '/Users/student10/dev/labs/khaite-clone/src/images/GRANADA_CAMEL-MULTI_0079_Main_480x.webp';
import image3 from '/Users/student10/dev/labs/khaite-clone/src/images/MARIA_BLACK.webp';

const Dropdown = () => {
  return (
    <div className='dropdown-menu'>
        <ul>
            <li><i>Shop All</i></li>
            <li><i>Dresses</i></li>
            <li><i>Tops</i></li>
            <li><i>Cashmere</i></li>
            <li><i>Knitwear</i></li>
            <li><i>Denim</i></li>
            <li><i>Bottoms</i></li>
            <li><i>Jackets & Coats</i></li>
            <li><i>Shoes</i></li>
            <li><i>Handbags</i></li>
            <li><i>Accessories</i></li>
            <li><i>New</i></li>
            <li><i>Preorder</i></li>
            <li><i>KHAITE x Bonpoint</i></li>
            <li><i>Resort 2024</i></li>
            <li><i>In Process</i></li>
            <li><i>Holiday Guide</i></li>
            <li><i>Exclusives</i></li>
            <li><i>Selected For You</i></li>
            <li><i>Collections</i></li>
            <li><img src={image1} alt='Khaite' width={230} height={400}/></li>
            <li><img src={image2} alt='Khaite' width={230} height={400} /></li>
            <li><img src={image3} alt='Khaite' width={230} height={400} /></li>
        </ul>
    </div>
  )
}

export default Dropdown