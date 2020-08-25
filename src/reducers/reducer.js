import { SET_ERROR, REGISTER_USER, REGISTER_USER_SUCCESS } from "../actions/index";

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
        default:
            return state
    }
} 