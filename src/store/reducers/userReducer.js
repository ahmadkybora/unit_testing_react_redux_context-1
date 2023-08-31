import { GET_USER } from "../actions/actionType";
const ali = [
    {first_name: "abcd"},
]
export default(state=ali, action) => {
    switch(action.type) {
        case GET_USER:
            return {}      
        default: 
            return state
    }
}