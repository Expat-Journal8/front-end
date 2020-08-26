//get request to /api/users/:id/stories -- will return posts created by id specific users

import React, { useEffect } from 'react';
import {axiosWithAuth} from '../api/axiosWithAuth';

const Stories = () => {
    
    useEffect(() => {
        axiosWithAuth().get('https://aa-expat.herokuapp.com/api/users/:id/stories')
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error.message);
        })
    })
    
    
    return (
        <div className='storiesCard'>

        </div>
    )
}

export default Stories;