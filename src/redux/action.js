import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants"

export const addToCart=(data) =>{
return {
    type: ADD_TO_CART,
    data
}
}

export const removeFromCart = (data)=>{
    console.log("remove from cart");
    return{
        type : REMOVE_FROM_CART,
        data
    }
}

export const emptyCart=() =>{
    console.log("empty cart")
    return {
        type: EMPTY_CART,
    }
    }
