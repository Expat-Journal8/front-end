import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../api/axiosWithAuth';

const UserStories = props => {
    const [stories, setStories] = useState([]);
    const params = useParams();
    const history = useHistory();

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

    const takeToStoryById = () => {
        history.push(`/Story/${params.id}`)
    }

    const deleteStory = () => {
        axiosWithAuth().delete(`/api/stories/${params.id}`)
            .then(response => {
                console.log(response);
                history.push('/Stories');
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='storyContainer' onClick={takeToStoryById}>
            <h3>{stories.storyName}</h3>
            <a href={`${stories.photoLink}`}>{stories.photoLink}</a>
            <button className='deleteStoryButton' onClick={deleteStory}>-</button>
        </div>
    )
}

export default UserStories;