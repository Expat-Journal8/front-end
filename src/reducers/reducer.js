import { SET_ERROR, REGISTER_USER, SUCCESS, LOADING, LOGIN_SUCCESS } from "../actions/index";

const initialState = { 
    users: [], 
    user: {}, 
    registerSuccessMessage: '',
    user_stories: {}, 
    isLoading: false, 
    error: null 
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case SUCCESS:
            return {
                ...state, 
                isLoading: false
            }
        case LOADING: 
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS: 
            return {
                ...state, 
                user: action.payload,
                isLoading: false
            }
        default:
            return state
    }
} 