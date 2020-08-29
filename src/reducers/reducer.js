import { SET_ERROR, SUCCESS, LOADING, LOGIN_SUCCESS, FETCH_USERS_SUCCESS, FETCH_USER_DATA_SUCCESS, FETCH_STORIES_SUCCESS, EDIT_USER_SUCCESS, FETCH_STORY_DATA_SUCCESS, ADD_STORY_SUCCESS, DELETE_STORY_SUCCESS, FETCH_PHOTOS_SUCCESS, ADD_PHOTO_SUCCESS, DELETE_PHOTO_SUCCESS, EDIT_PHOTO_SUCCESS } from "../actions/index";

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
        case EDIT_USER_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                user: action.payload
            }
        case FETCH_STORY_DATA_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                story: action.payload
            }
        case ADD_STORY_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                story: action.payload
            }
        case DELETE_STORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                deletedStory: action.payload
            }
        case FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                photos: action.payload
            }
        case ADD_PHOTO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                newPhoto: action.payload
            }
        case DELETE_PHOTO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                deletedPhoto: action.payload
            }
        case EDIT_PHOTO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                photo: action.payload
            }
        default:
            return state
    }
} 