// put request to /api/users/:id -- will allow users to update their profile data

import React from 'react';
import {axiosWithAuth} from '../api/axiosWithAuth';

//should i just make a form with their info autofilled that they can edit?

const EditUser = () => {
    axiosWithAuth().get('https://aa-expat.herokuapp.com/api/users/:id')
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
}

export default EditUser;