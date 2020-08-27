import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    const BASEURL = 'https://aa-expat.herokuapp.com'
    console.log(`token is ${token}`);
    return axios.create({
        baseURL: BASEURL,
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
};