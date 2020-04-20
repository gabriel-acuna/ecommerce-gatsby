import React from 'react';
import { GoPlus } from "react-icons/go";

import Icon from './Icon';

export default ({ addProduct }) => {

    return (
        <button className="btn" onClick={addProduct} >
            <Icon styles={"inline-block text-2xl mr-2"} icon={<GoPlus />} />
                
           
                Add to cart
        </button>
    )
}
