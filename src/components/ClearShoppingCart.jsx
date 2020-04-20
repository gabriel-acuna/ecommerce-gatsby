import React from 'react';
import Icon from './Icon';
import { MdRemoveShoppingCart } from 'react-icons/md';


export default ({ clearCart }) => {

    return (
        <button className="flat-btn" onClick={clearCart}>
            <Icon styles={"inline-block text-2xl mr-2"} icon={<MdRemoveShoppingCart />} />
            Clear Cart
        </button>
    )
}