import React from 'react';
import Product from './Products';

function Price() {
    return <p><span className='priceCurrency'>Price: $</span>{Product.price}</p>;
}

export default Price;
