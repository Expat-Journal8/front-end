import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {axiosWithAuth} from '../api/axiosWithAuth';
import {fetchUserStories} from '../actions/index';

const UserStories = props => {
    const [stories, setStories] = useState([]);
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        // axiosWithAuth().get(`/api/users/${params.id}/stories`)
        //     .then(response => {
        //         console.log(response);
        //         setStories(response.data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
        props.fetchUserStories(params.id, setStories);
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

export default connect(mapStateToProps, {fetchUserStories})(UserStories);