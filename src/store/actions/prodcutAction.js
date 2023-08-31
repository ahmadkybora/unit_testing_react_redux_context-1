import { GET_PRODUCTBYID, GET_PRODUCTS } from "./actionType"

// متد زیر در واقع یک اکشن میباشد
// اکشن ها دارای دو مقدار 
// type && payload
// هستند
export const getAllProducts = () => {
    return {
        type: GET_PRODUCTS,
        payload: null
    }
}

const productId = 1
export const getProductById = () => {
    return {
        type: GET_PRODUCTBYID,
        payload: productId
    }
}