import React from 'react';

export default function Header() {
  return (
    <>
    <div className='header'>
      <div className='logo'>
        <p>ShoppingMart</p>
      </div>
        <div className='search'>
            <p>Cart</p>
            <input type="text" name='Enter Search' placeholder='Search'></input>
        </div>
    </div>
    </>
  )
}
