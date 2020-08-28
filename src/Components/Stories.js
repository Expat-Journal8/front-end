import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from 'react-router-dom';
import {axiosWithAuth} from '../api/axiosWithAuth';
import {fetchUserStories} from '../actions/index'

const Stories = () => {
    const [stories, setStories] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axiosWithAuth().get('/api/stories')
            .then(response => {
                setStories(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    console.log(stories);

    const addStory = () => {
        history.push(`/Stories/addStory`);
    }

    return (
        <div className='storiesBodyContainer'>
            <div className='addStoryButtonContainer'>
                <button className='addStoryButton' onClick={addStory}>Add your own story here!</button>
            </div>
            <div className='storiesContainer'>
                {stories.map(story => 
                    <Link to={`/Story/${story.id}`}>
                        <div className='story'>
                            {story.storyName} <br />
                            {`${story.storyCity}, ${story.storyCountry}`} <br />
                            {story.storyDesc} <br />
                            {story.storyDate}
                        </div>
                    </Link>
                    
                )}
            </div>
        </div>
        
    )
}

export default Stories;