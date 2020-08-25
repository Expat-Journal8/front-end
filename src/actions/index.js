import axios from 'axios';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const UPDATE_USER_DATA = "UPDATE_USER_DATA";
export const SET_ERROR = "SET_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const USERNAME_CREATION = "USERNAME_CREATION";
export const PASSWORD_CREATION = "PASSWORD_CREATION";


export const getData = () => dispatch => {
    dispatch({ type: FETCH_USER_DATA });
    axios.get("url")
        .then(response => {
            dispatch({ type: UPDATE_USER_DATA, payload: response.data})
        })
        .catch(err => {
            dispatch({ type: SET_ERROR, payload: "Error: couldn't fetch data from api"})
    })
}

export const registerUser = () => dispatch => {
    dispatch({type: REGISTER_USER});
    axios.post("url")
        .then(response => {
            dispatch({type: REGISTER_USER_SUCCESS, payload: response.data})
        })
        .catch(error => console.log(error.message))
}

export const registerUser_username = (username) => {
    console.log(username);
    return {
        type: USERNAME_CREATION,
        payload: username
    }
}

export const registerUser_password = (password) => {
    console.log(password);
    return {
        type: PASSWORD_CREATION,
        payload: password
    }
}