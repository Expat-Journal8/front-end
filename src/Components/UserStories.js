import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {axiosWithAuth} from '../api/axiosWithAuth';

const UserStories = props => {
    const [stories, setStories] = useState([]);
    const params = useParams();

    useEffect(() => {
        axiosWithAuth().get(`/api/users/${params.id}/stories`)
            .then(response => {
                console.log(response);
                setStories(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    

    return (
        <div className='storyContainer'>
            <h3>{stories.storyName}</h3>
            <a href={`${stories.photoLink}`}>{stories.photoLink}</a>
        </div>
    )
}

export default UserStories;