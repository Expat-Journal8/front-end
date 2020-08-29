import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addPhoto} from '../actions/index';

const AddStory = props => {
    const [photo, setPhoto ] = useState( { photoLink:"", photoDesc:"", stories_id: '' } );

    const handleSubmit = e => {
        e.preventDefault();
        props.addPhoto(photo);
    };

    const handleChange = e => {
        setPhoto({...photo, [e.target.name]: e.target.value});
    };
    
    return (
        <div className="addPhotoForm">
            <form onSubmit={ handleSubmit }>
                <div className="photoLink">
                    <label 
                    htmlFor="photoLink">Photo URL</label> <br />
                    <input
                     type="text" 
                     id="photoLink" 
                     name="photoLink" 
                     value={photo.photoLink} 
                     onChange={handleChange}/>
                </div>
                <div className="photoDesc">
                    <label 
                    htmlFor="photoDesc">Photo Description</label> <br />
                    <input
                    name="textarea" 
                    id="photoDesc" 
                    name="photoDesc" 
                    value={photo.photoDesc} 
                    onChange={handleChange}/>
                </div>
                <div className="stories_id">
                    <label 
                    htmlFor="stories_id">Story ID</label> <br />
                    <input 
                    type="text" 
                    id="stories_id" 
                    name="stories_id" 
                    value={photo.stories_id} 
                    onChange={handleChange}/>
                </div>
                <button>Add Photo</button>
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

export default connect(mapStateToProps, {addPhoto})(AddStory);