import React, {useState} from 'react';
import {axiosWithAuth} from '../api/axiosWithAuth';

const AddStory = props => {
    const [story, setStory ] = useState( { title:"", trip:"" , date:"" } );

    const handleSubmit = story => {
        axiosWithAuth().post(`/api/stories`, story)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const handleChange = e => {
        setStory({...story, [e.target.name]: e.target.value});
    };
    
    
    return (
        <div className="storiesWrapper">
            <form onSubmit={ handleSubmit }>
                <div className="storyTitle">
                    <label 
                    htmlFor="title">Title: </label>
                    <input
                     type="text" 
                     id="title" 
                     name="title" 
                     value={ story.title} 
                     onChange={handleChange}/>
                </div>
                <div className="story">
                    <label 
                    htmlFor="editStory">Tell your story: </label>
                    <textarea 
                    name="textarea" 
                    id="editStory" 
                    name="trip" 
                    value={story.trip} 
                    onChange={handleChange}/>
                </div>
                <div className="storyDate">
                    <label 
                    htmlFor="date">Date: </label>
                    <input 
                    type="text" 
                    id="date" 
                    name="date" 
                    value={story.date} 
                    onChange={handleChange}/>
                </div>
                <button>Add Story</button>
            </form>
        </div>
    )
}

export default AddStory;