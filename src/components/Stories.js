import React, {useState, useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchAllStories} from '../actions/index'

const Stories = props => {
    const [stories, setStories] = useState([]);
    const history = useHistory();

    useEffect(() => {
        props.fetchAllStories(stories, setStories);
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

const mapStateToProps = state => {
    return {
        users: [], 
        user: {}, 
        registerSuccessMessage: '',
        user_stories: {}, 
        isLoading: false, 
        error: null 
    }
}

export default connect(mapStateToProps, {fetchAllStories})(Stories);