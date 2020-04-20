import { ADD_ITEM, CLEAR_CART } from "../actions/actionTypes";

export default function (state = [], action) {

    let  shoppingCart  = state;
    if (action.type === ADD_ITEM) {
        const isOnCart = shoppingCart.find(sku => sku.id === action.payload.id);
        if (isOnCart) {
            return  shoppingCart.map(
                    sku => {
                        if(sku.id === isOnCart.id) return {...sku, quantity
                        :sku.quantity + 1};
                        return sku;
                    }
                );
        } else {
            return shoppingCart.concat([{
                    ...action.payload,
                    quantity: 1
                }]);
        }

    }

    if(action.type === CLEAR_CART){
        return []
    }
    return shoppingCart;
}