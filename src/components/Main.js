import React from 'react'
import Product from './Product';

export default function Main(props) {
    const {products} = props;
  return (
    <>
    <div className='main'>
    <h2>Product</h2>
    <div className='main-1'>
        {products.map((product) => (
            <Product key={product.id} product={product}></Product>
        ))}
    </div>
    </div>
    </>
  )
}
