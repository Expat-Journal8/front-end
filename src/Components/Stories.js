import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../api/axiosWithAuth';

const Stories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/api/stories')
            .then(response => {
                setStories(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className='storiesContainer'>
            {stories.map(story => 
                <div className='story'>
                    {story.storyName} <br />
                    {`${story.storyCity}, ${story.storyCountry}`} <br />
                    {story.storyDesc} <br />
                    {story.storyDate}
                </div>
            )}
        </div>
    )
}

export default Stories;