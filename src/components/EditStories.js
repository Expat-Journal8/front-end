import React, {useState, useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {axiosWithAuth} from '../api/axiosWithAuth';
import {fetchStoryData} from '../actions/index';


const EditStories = props =>{
    const [story, setStory ] = useState( { storyName:"", storyCity:"", storyCountry: '', storyDesc: '', user_id: '', storyPhoto: '' } );
    const params = useParams();
    const history = useHistory();

    const handleChange = e => {
            setStory({...story, [e.target.name]: e.target.value});
        };

        console.log(story);

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().put(`/api/stories/${params.id}`, story)
            .then(response => {
                console.log(response);
                history.push(`/Story/${params.id}`);
            })  
            .catch(error => {
                console.log(error);
            })
    };

    useEffect(() => {
        props.fetchStoryData(story, setStory, params)
    }, [])
    
    return(
        <div className="storiesWrapper">
            <form onSubmit={ handleSubmit }>
                <div className="storyName">
                    <label 
                    htmlFor="storyName">Story Name</label> <br />
                    <input
                     type="text" 
                     id="storyName" 
                     name="storyName" 
                     value={ story.storyName} 
                     onChange={handleChange}/>
                </div>
                <div className="storyCity">
                    <label 
                    htmlFor="storyCity">Story City</label> <br />
                    <input
                    type="text" 
                    id="storyCity" 
                    name="storyCity" 
                    value={story.storyCity} 
                    onChange={handleChange}/>
                </div>
                <div className="storyCountry">
                    <label 
                    htmlFor="storyCountry">Story Country</label> <br />
                    <input 
                    type="text" 
                    id="storyCountry" 
                    name="storyCountry" 
                    value={story.storyCountry} 
                    onChange={handleChange}/>
                </div>
                <div className="storyDesc">
                    <label 
                    htmlFor="date">Story Description</label> <br />
                    <textarea 
                    type="text" 
                    id="storyDesc" 
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
                <div className="photoLink">
                    <label 
                    htmlFor="photoLink">PhotoURL</label> <br />
                    <input 
                    type="text" 
                    id="photoLink" 
                    name="photoLink" 
                    value={story.photoLink} 
                    onChange={handleChange}/>
                </div>
                <button>Finish editing!</button>
            </form>
        </div>
        )
};

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

export default connect(mapStateToProps, {fetchStoryData})(EditStories);