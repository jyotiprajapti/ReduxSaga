import { PRODUCT_LIST } from "./constants"

export const productList = () =>{
    console.log("product action")
    const data = "hello" 
    return{
        type: PRODUCT_LIST,
        data
    }
}