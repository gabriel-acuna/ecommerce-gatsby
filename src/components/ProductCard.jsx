import React from 'react';
import { Link } from 'gatsby';


export default ({ product }) => {

    return (
        <article className="card">
            <header className="p-4 flex items-center">
                <h2 className="font-bold uppercase text-2xl text-indigo-100 flex-1"> {product.name}</h2>
                <div className="w-1/3">
                    <Link to={`products/${product.slug}`} className="hover:bg-blue-400 p-4"> Ver Producto</Link>
                </div>
            </header>

        </article>
    )
}