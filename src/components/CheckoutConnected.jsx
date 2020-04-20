import React, { useEffect, useState } from 'react';
import Checkout from './Checkout';


export default ({ shoppingCart }) => {

    const [stipe, setStripe] = useState({});

    useEffect(() => {
        setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY))
    }, []);

    const redirectToCheckout = async (ev) => {

        let response = await stipe.redirectToCheckout({
            items: shoppingCart.map(sku => ({sku: sku.id, quantity: sku.quantity})) ,
            successUrl: `http://localhost:8000/completed`,
            cancelUrl: `http://localhost:8000/`
        });

        if (response.error) {
            console.log(response.error);

        }
    };


    return (
        <Checkout redirectToCheckout={redirectToCheckout} />
    )
}