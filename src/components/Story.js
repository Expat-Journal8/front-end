import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {axiosWithAuth} from '../api/axiosWithAuth';
import {deleteStory} from '../actions/index';

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
        props.deleteStory(params);
    }
    
    return (
        <div className='container'>
            <div className='storyContainer'>
                <h4>{story.storyName}</h4> <br />
                <img src={`${story.photoLink}`}></img>
            </div>
            <button className='editStoryButton' onClick={redirectToEditStoryPage}>Edit Story!</button>
            <button className='deleteStoryButton' onClick={deleteStory}>Delete Story!</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: [], 
        user: {}, 
        registerSuccessMessage: '',
        user_stories: {}, 
        isLoading: false, 
        error: null 
    }
}

export default connect(mapStateToProps, {deleteStory})(Story);