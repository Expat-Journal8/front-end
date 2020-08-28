import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {addStory} from '../actions/index';

const AddStory = props => {
    const [story, setStory ] = useState( { storyName:"", storyCity:"", storyCountry: '', storyDesc: '', user_id: '', storyPhoto: '' } );
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        props.addStory(story);
    };

    const handleChange = e => {
        setStory({...story, [e.target.name]: e.target.value});
    };
    
    return (
        <div className="storiesWrapper">
            <form onSubmit={ handleSubmit }>
                <div className="storyName">
                    <label 
                    htmlFor="title">Story Name</label> <br />
                    <input
                     type="text" 
                     id="storyName" 
                     name="storyName" 
                     value={ story.storyName} 
                     onChange={handleChange}/>
                </div>
                <div className="storyCity">
                    <label 
                    htmlFor="editStory">Story City</label> <br />
                    <input
                    name="textarea" 
                    id="storyCity" 
                    name="storyCity" 
                    value={story.storyCity} 
                    onChange={handleChange}/>
                </div>
                <div className="storyCountry">
                    <label 
                    htmlFor="date">Story Country</label> <br />
                    <input 
                    type="text" 
                    id="date" 
                    name="storyCountry" 
                    value={story.storyCountry} 
                    onChange={handleChange}/>
                </div>
                <div className="storyDate">
                    <label 
                    htmlFor="date">Story Description</label> <br />
                    <textarea 
                    type="text" 
                    id="date" 
                    name="storyDesc" 
                    value={story.storyDesc} 
                    onChange={handleChange}/>
                </div>
                <div className="storyDate">
                    <label 
                    htmlFor="date">User ID</label> <br />
                    <input 
                    type="text" 
                    id="userId" 
                    name="user_id" 
                    value={story.user_id} 
                    onChange={handleChange}/>
                </div>
                <div className="storyDate">
                    <label 
                    htmlFor="date">Photo URL</label> <br />
                    <input 
                    type="text" 
                    id="userId" 
                    name="storyPhoto" 
                    value={story.storyPhoto} 
                    onChange={handleChange}/>
                </div>
                <button>Add Story</button>
            </form>
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

export default connect(mapStateToProps, {addStory})(AddStory);