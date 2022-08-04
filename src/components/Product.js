import React from 'react'

export default function Product(props) {
    const {product} = props;
  return (
    <div className='product'>
        <img className='imgs' src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <div>Price: {product.price}</div>
        <div>
            <button className='add'>Add to Cart</button>
        </div>
    </div>
  )
}
