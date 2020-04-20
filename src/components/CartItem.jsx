import React from 'react';
import Price from './Price';


export default ({ sku }) => {

    return (
        <div className="p-6 border-b flex">
            <div className="flex-1">
                <p className="font-bold uppercase">
                    {sku.attributes.name}

                </p>
                <Price {...sku} className="text-indigo-300 mt-1" />
            </div>
            <div className="">
                <p> {sku.quantity} </p>
            </div>
        </div>
    )
}