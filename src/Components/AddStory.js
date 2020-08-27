import React, {useState} from 'react';
import {axiosWithAuth} from '../api/axiosWithAuth';

const AddStory = props => {
    const [story, setStory ] = useState( { storyName:"", storyCity:"", storyCountry: '', storyDesc: '', user_id: '' } );

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
                <button>Add Story</button>
            </form>
        </div>
    )
}

export default AddStory;