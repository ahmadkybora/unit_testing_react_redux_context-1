import { GET_USER } from './actionType';
import { GET_USERS } from './actionType';

const a = 2;
export const getUser = () => {
    return {
        type: GET_USER,
        payload: a,
    }
}

const users = [
    {first_name: "", last_name: "", age: ""}
]

export const getUsers = () => {
    return {
        type: GET_USERS,
        payload: users,
    }
}