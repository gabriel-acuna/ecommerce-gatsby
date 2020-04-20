import React from 'react';
import ClearShoppingCart from './ClearShoppingCart';
import { useDispatch } from 'react-redux';
import { clearCart } from '../state/actions/shopping_cart';


export default (props) => {
    const dispatch = useDispatch();
    const clearShoppingCart = () => {
        dispatch(clearCart())
    }
    return (
        <div>
            <ClearShoppingCart clearCart={clearShoppingCart} />
        </div>
    )
}