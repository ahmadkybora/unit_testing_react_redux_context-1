import { GET_PRODUCTBYID, GET_PRODUCTS } from "../actions/actionType"

// ریدیوسر دارای دو ورودی هست
// state && action
export default (state=null, action) => {
    switch(action.type) {
        case GET_PRODUCTS:
            return {success: true};
        default:
            return state;
    }
}