import axios from 'axios';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const UPDATE_DATA = "UPDATE_DATA";
export const SET_ERROR = "SET_ERROR";


export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios.get("url")
        .then(response => {
            dispatch({ type: UPDATE_DATA, payload: response.data})
        })
        .catch(err => {
            dispatch({ type: SET_ERROR, payload: "Error: couldn't fetch data from api"})
    })
}