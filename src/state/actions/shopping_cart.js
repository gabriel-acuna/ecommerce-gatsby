import { ADD_ITEM, CLEAR_CART } from "./actionTypes"

export const addItem = (product) => {
    return {
        type: ADD_ITEM,
        payload: product
    }
}
export const clearCart = ()=>{
    return {
        type: CLEAR_CART
       
    }
}