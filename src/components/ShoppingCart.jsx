import React from 'react';
import CartItem from './CartItem';
import Total from './Total';
import ClearCartConnected from './ClearCartConnected';
import CheckoutConnected from './CheckoutConnected';


export default ({ shoppingCart }) => {

    return (
        <div className="card">
            <div className="flex items-end">
                <div className="flex-1">
                    <header className="flex p-6 items-center">
                        <h2 className="flex-1 text-3xl font-semibold p-4"> My shopping cart</h2>
                        <div>
                            <ClearCartConnected />
                        </div>
                    </header>
                    <ul>
                        {
                            shoppingCart.map(
                                (sku) => (
                                    <CartItem sku={sku} key={sku.id} />
                                )
                            )
                        }
                    </ul>
                </div>
                <div className="w-1/3 text-center p-6 font-extrabold">
                    <Total shoppingCart={shoppingCart} />
                </div>
            </div>

            <div className="p-6">
                <CheckoutConnected shoppingCart={shoppingCart} />
            </div>
        </div>
    )
}