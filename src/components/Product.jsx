import React from 'react';
import Price from './Price';
import AddToCartConnected from './AddToCartConnected';


export default ({ product, skus }) => {

    return (
        <article className="card">
            <header className="bg-indigo-800 p-6 text-center">
                <div className="flex text-left">
                    <div className="flex-1">
                        {
                            (skus && skus.length > 0 && skus[0].image) &&
                            <img src={skus[0].image}  alt="product's ilustration"/>
                        }

                    </div>
                    <div className="flex-1 p-6">
                        <p>Precio:</p>
                        <Price {...skus[0]} className="text-2xl"/>
                    </div>

                </div>
            </header>
            <div className="text-center p-6">

                <h1 className="uppercase text-3xl mb-4">{ product.name}</h1>
                <AddToCartConnected sku={skus[0]}/>
            </div>


        </article>
    )
}