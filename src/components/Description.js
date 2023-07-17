import React from 'react';
import Product from './Products';

function Description() {
  return (
  <p><span className='desc'>Description</span>: {Product.description}</p>
  );
}

export default Description;
