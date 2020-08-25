import axios from 'axios';
import {axiosWithAuth} from '../api/axiosWithAuth';

export const SET_ERROR = "SET_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";


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

export const registerUser = (userData) => dispatch => {
    // no need -- dispatch({type: REGISTER_USER});
    axiosWithAuth.post("https://aa-expat.herokuapp.com/api/auth/register", userData)
        .then(response => {
            // dispatch({type: REGISTER_USER_SUCCESS, payload: response.data})
            // set user for successful login with auth token
            // go to history -- see signIn component
            // userData is being received from the sign up form, correct?
            console.log(response);
        })
        .catch(error => console.log(error.message))
}

export const login = (e, credentials) => {
//post both username and password
    //e.preventDefault();
    axiosWithAuth().post('https://aa-expat.herokuapp.com/api/auth/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        console.log('token is', res.token);
        // props.history.push('/Profile');
      })
}

//const updateUserProfile -- put request to /api/users/:id

//const deleteUserProfile -- delete request to ___