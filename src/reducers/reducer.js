import { SET_ERROR, SUCCESS, LOADING, LOGIN_SUCCESS, FETCH_USERS_SUCCESS, FETCH_USER_DATA_SUCCESS, FETCH_STORIES_SUCCESS } from "../actions/index";

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
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
        case FETCH_USER_DATA_SUCCESS:
            return {
                ...state, 
                user: action.payload,
                isLoading: false
            }
        case FETCH_STORIES_SUCCESS:
            return {
                ...state, 
                stories: action.payload,
                isLoading: false
            }
        default:
            return state
    }
} 