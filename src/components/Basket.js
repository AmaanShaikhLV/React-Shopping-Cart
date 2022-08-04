import React from 'react'

export default function Basket(props) {
    const {cartItems} = props; 
  return (
    <div><h2>Card Items</h2>
    <div>
        {cartItems.length === 0 && <div>Cart Is Empty</div>}
    </div>
    </div>
  )
}
