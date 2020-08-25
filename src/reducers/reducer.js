import { FETCH_USER_DATA, UPDATE_USER_DATA, SET_ERROR, REGISTER_USER, REGISTER_USER_SUCCESS, USERNAME_CREATION, PASSWORD_CREATION } from "../actions";

const initialState = { 
    users: [], 
    user: {
        username: '',
        password: ''
    }, 
    registerSuccessMessage: '',
    user_stories: {}, 
    isLoading: false, 
    error: null 
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_DATA:
            return {
                ...state,
                isFetchingData: true,
                data: []
            }
        case UPDATE_USER_DATA:
            return {
                ...state,
                isFetchingData: false,
                data: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        case REGISTER_USER:
            return {
                ...state, 
                user: action.payload
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state, 
                registerSuccessMessage: action.payload
            }
        case USERNAME_CREATION:
            return {
                ...state, 
                user: {username: action.payload}
            }
        case PASSWORD_CREATION:
            return {
                ...state, 
                user: {password: action.payload}
            }
        default:
            return state
    }
} 