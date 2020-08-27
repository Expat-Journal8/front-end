//import React, {useEffect} from 'react';
import axios from 'axios';
import {axiosWithAuth} from '../api/axiosWithAuth';
import history from '../api/history';
import {useParams} from 'react-router-dom';
//import { reducer } from '../reducers/reducer';

export const SET_ERROR = "SET_ERROR";
export const SUCCESS = "SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOADING = "LOADING";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USER_DATA_SUCCESS = "FETCH_USER_DATA_SUCCESS";
export const FETCH_STORIES_SUCCESS = "FETCH_STORIES_SUCCESS";

// export const getData = () => dispatch => {
//     dispatch({ type: FETCH_USER_DATA });
//     axios.get("url")
//         .then(response => {
//             dispatch({ type: UPDATE_USER_DATA, payload: response.data})
//         })
//         .catch(err => {
//             dispatch({ type: SET_ERROR, payload: "Error: couldn't fetch data from api"})
//     })
// }

export const registerUser = userData => dispatch => {
    // no need -- dispatch({type: REGISTER_USER});
    axios.post("https://aa-expat.herokuapp.com/api/auth/register", userData)
        .then(response => {
            // dispatch({type: REGISTER_USER_SUCCESS, payload: response.data})
            // set user for successful login with auth token
            // go to history -- see signIn component
            console.log(response);
        })
        .catch(error => console.log(error.message))
}

export const login = credentials => dispatch => {
//post both username and password
    //e.preventDefault();
    dispatch({type: LOADING});
    axios.post('https://aa-expat.herokuapp.com/api/auth/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        console.log('token is', res);
        // props.history.push('/Profile/:id') then get user id with useparams
        dispatch({type: LOGIN_SUCCESS, payload: res.data.user});
        history.push(`/Profile/${res.data.user.id}`)
        //window.location.reload();
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

//how and from where would I be able to grab ID?
        //useParams

export const fetchUserData = () => dispatch => {
    dispatch({type: LOADING})
    axiosWithAuth().get(`/api/users/:id`)
        .then(response => {
            console.log(response);
            dispatch({type: FETCH_USER_DATA_SUCCESS, payload: response.data})
        })
        .catch(error => {
            console.log(error.message);
        })
}

export const fetchStories = () => dispatch => {
    dispatch({type: LOADING});
    axiosWithAuth().get('/api/users/:id/stories')
        .then(response => {
            console.log(response);
            dispatch({type: FETCH_STORIES_SUCCESS, payload: response.data})
        })
        .catch(error => {
            console.log(error.message);
        })
}

//const updateUserProfile -- put request to /api/users/:id

//const deleteUserProfile -- delete request to ___