import axios from 'axios';

const initialState = {
    user: {},
    users: []
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_ALL_USERS = 'GET_ALL_USERS';

export function getUserInfo() {
    const user = axios.get('/auth/me').then(res => res.data)
    return {
        type: GET_USER_INFO,
        payload: user
    }
}

export function getAllUsers() {
    const allUsers = axios.get('/api/users').then(res => res)
    return {
        type: GET_ALL_USERS,
        payload: allUsers
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_ALL_USERS + '_PENDING':
            return state;
        case GET_ALL_USERS + '_FULFILLED':
            console.log(action.payload.data);
            return Object.assign({}, state, { users: action.payload.data })
        default:
            return state;
    }
}