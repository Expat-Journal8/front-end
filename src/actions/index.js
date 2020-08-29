import axios from 'axios';
import {axiosWithAuth} from '../api/axiosWithAuth';
import history from '../api/history';

export const SET_ERROR = "SET_ERROR";
export const SUCCESS = "SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOADING = "LOADING";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USER_DATA_SUCCESS = "FETCH_USER_DATA_SUCCESS";
export const FETCH_STORIES_SUCCESS = "FETCH_STORIES_SUCCESS";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const DELETE_PROFILE_SUCCESS = "DELETE_PROFILE_SUCCESS";
export const ADD_STORY_SUCCESS = "ADD_STORY_SUCCESS";
export const DELETE_STORY_SUCCESS = "DELETE_STORY_SUCCESS";
export const FETCH_STORY_DATA_SUCCESS = "FETCH_STORY_DATA_SUCCESS";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const FETCH_PHOTO_SUCCESS = "FETCH_PHOTO_SUCCESS";
export const ADD_PHOTO_SUCCESS = "ADD_PHOTO_SUCCESS";
export const DELETE_PHOTO_SUCCESS = "DELETE_PHOTO_SUCCESS";
export const EDIT_PHOTO_SUCCESS = "EDIT_PHOTO_SUCCESS";


export const registerUser = userData => dispatch => {
    axios.post("https://aa-expat.herokuapp.com/api/auth/register", userData)
        .then(response => {
            console.log(response);
            history.push('/SignIn')
            window.location.reload();
        })
        .catch(error => console.log(error.message))
}

export const login = credentials => dispatch => {
    dispatch({type: LOADING});
    axios.post('https://aa-expat.herokuapp.com/api/auth/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        console.log('token is', res);
        dispatch({type: LOGIN_SUCCESS, payload: res.data.user});
        history.push(`/Profile/${res.data.user.id}`)
        window.location.reload();
      })
      .catch(error => console.log(error))
}


export const fetchUsers = () => dispatch => {
    dispatch({type: LOADING})
    axiosWithAuth().get('/api/users')
        .then(response => {
            console.log(response);
            dispatch({type: FETCH_USERS_SUCCESS, payload: response.data})
        })
        .catch(err=>{
            console.log(err);
        });
}

export const fetchUserData = (params, setUserData) => dispatch => {
    dispatch({type: LOADING})
    axiosWithAuth().get(`/api/users/${params.id}`)
        .then(response => {
            console.log(response);
            setUserData(response.data);
            dispatch({type: FETCH_USER_DATA_SUCCESS, payload: response.data})
        })
        .catch(error => {
            console.log(error.message);
        })
}

export const fetchAllStories = (stories, setStories) => dispatch => {
    dispatch({type: LOADING})
    axiosWithAuth().get('/api/stories')
        .then(response => {
            setStories(response.data);
            dispatch({type: FETCH_STORIES_SUCCESS, payload: response.data});
        })
        .catch(error => {
            console.log(error);
        })
}

export const fetchUserStories = (params, setStories) => dispatch => {
    dispatch({type: LOADING});
    axiosWithAuth().get(`/api/users/${params}/stories`)
        .then(response => {
            console.log(response);
            setStories(response.data);
            dispatch({type: FETCH_STORIES_SUCCESS, payload: response.data})
        })
        .catch(error => {
            console.log(error.message);
        })
}

export const editUserData = (params, user) => dispatch => {
    dispatch({type: LOADING});
    axiosWithAuth().put(`api/users/${params.id}/`, user)
        .then(response => {
            console.log(response);
            history.push(`/Profile/${params.id}`)
            dispatch({type: EDIT_USER_SUCCESS, payload: response.data})
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        })
}

export const deleteProfile = (params) => dispatch => {
    dispatch({type: LOADING});
    axiosWithAuth().delete(`/api/users/${params.id}`)
        .then(response => {
            console.log(response);
            localStorage.removeItem('token');
            history.push('/SignUp');
            dispatch({type: DELETE_PROFILE_SUCCESS, payload: response.data})
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        })
}

export const addStory = (story) => dispatch => {
    dispatch({type: LOADING});
    axiosWithAuth().post(`/api/stories`, story)
        .then(response => {
            console.log(response);
            history.push('/Stories');
            dispatch({type: ADD_STORY_SUCCESS, payload: response.data});
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        })
}

export const deleteStory = params => dispatch => {
    dispatch({type: LOADING});
    axiosWithAuth().delete(`/api/stories/${params.id}`)
        .then(response => {
            console.log(response);
            dispatch({type: DELETE_STORY_SUCCESS, payload: response.data});
            history.push('/Stories');
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        })
}

export const fetchStoryData = (story, setStory, params) => dispatch => {
    dispatch({type: LOADING});
    axiosWithAuth().get(`/api/stories/${params.id}`)
        .then(response => {
            console.log(response);
            setStory(response.data)
            dispatch({type: FETCH_STORY_DATA_SUCCESS, payload: response.data});
        })
        .catch(error => {
            console.log(error);
        })
}

export const fetchPhotos = (setPhotos) => dispatch => {
    dispatch({type: LOADING});
    axiosWithAuth().get(`/api/photos`)
        .then(response => {
            console.log(response);
            setPhotos(response.data);
            dispatch({type: FETCH_PHOTOS_SUCCESS, payload: response.data});
        })
        .catch(error => {
            console.log(error);
        })
}

export const fetchPhotoById = (setPhoto, params) => dispatch => {
    dispatch({type: LOADING});
    axiosWithAuth().get(`/api/photos/${params.id}`)
        .then(response => {
            console.log(response);
            setPhoto(response.data);
            dispatch({type: FETCH_PHOTO_SUCCESS, payload: response.data});
        })
        .catch(error => {
            console.log(error);
        })
}

export const addPhoto = () => dispatch => {
    dispatch({type: LOADING});
    axiosWithAuth().post(`/api/photos`)
        .then(response => {
            console.log(response);
            dispatch({type: ADD_PHOTO_SUCCESS, payload: response.data});
            history.push(`/Photos`);
        })
        .catch(error => {
            console.log(error);
        })
}

export const deletePhoto = params => dispatch => {
    dispatch({type: LOADING});
    axiosWithAuth().delete(`/api/photos/${params.id}`)
        .then(response => {
            console.log(response);
            dispatch({type: DELETE_PHOTO_SUCCESS, payload: response.data})
            history.push('/Photos');
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        })
}

export const editPhoto = (params, e) => dispatch => {
    e.preventDefault();
    dispatch({type: LOADING});
    axiosWithAuth().put(`/api/photos/${params.id}`)
        .then(response => {
            console.log(response);
            dispatch({type: EDIT_PHOTO_SUCCESS, payload: response.data});
            history.push(`/Photo/${params.id}`);
        })
        .catch(error => {
            console.log(error);
        })
}