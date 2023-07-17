import React from 'react';
import Product from './Products';

const Name = () => {
    return (
        <div>
           <p><span className='name'>Name:</span> {Product.name}</p>
        </div>
    )
}

export default Name;