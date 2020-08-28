import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {axiosWithAuth} from '../api/axiosWithAuth';

const Story = (props) => {
    const [story, setStory] = useState([]);
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        axiosWithAuth().get(`/api/stories/${params.id}`)
            .then(response => {
                console.log(response);
                setStory(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const redirectToEditStoryPage = () => {
        history.push(`/Story/${params.id}/editStory`)
    }

    const deleteStory = () => {
        axiosWithAuth().delete(`/api/stories/${params.id}`)
            .then(response => {
                console.log(response);
                history.push('/Stories');
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    return (
        <div className='container'>
            <div className='storyContainer'>
                <h4>{story.storyName}</h4> <br />
                <a href={`${story.photoLink}`}>{story.photoLink}</a>
            </div>
            <button className='editStoryButton' onClick={redirectToEditStoryPage}>Edit Story!</button>
            <button className='deleteStoryButton' onClick={deleteStory}>Delete Story!</button>
        </div>
    )
}

export default Story;