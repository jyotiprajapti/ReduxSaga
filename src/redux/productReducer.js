import { PRODUCT_LIST } from "./constants"

export const productData =(data= [], action)=>{
    
    switch(action.type){
        case PRODUCT_LIST:
            console.log("product reducer ", action.data)
            return action.data
            default:
                return data
    }

}