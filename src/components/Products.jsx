import React from 'react';
import ProductCard from './ProductCard';


export default ({ products }) => {

    return (
        <div>
          
                {
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            
        </div>
    )
}