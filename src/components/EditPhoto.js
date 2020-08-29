import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchPhotoById, editPhoto } from '../actions/index';

const EditPhoto = props => {
    const [photo, setPhoto] = useState({id: '', photoLink: '', photoDesc: '', photoDate: '', stories_id: ''});
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        props.fetchPhotoById(setPhoto, params);
    }, [])

    const handleSubmit = (e) => {
        props.editPhoto(params, e, photo);
    }

    const handleChange = e => {
        setPhoto({...photo, [e.target.name]: e.target.value});
    };
    
    return (
        <div className="storiesWrapper">
            <span>Edit photo here!</span>
            <form onSubmit={ handleSubmit }>
                <div className="storyName">
                    <label 
                    htmlFor="id">Photo ID</label> <br />
                    <input
                     type="text" 
                     id="id" 
                     name="id" 
                     value={photo.id} 
                     onChange={handleChange}/>
                </div>
                <div className="photoLink">
                    <label 
                    htmlFor="photoLink">Photo URL</label> <br />
                    <input
                    type='text'
                    id="photoLink" 
                    name="photoLink" 
                    value={photo.photoLink} 
                    onChange={handleChange}/>
                </div>
                <div className="photoDesc">
                    <label 
                    htmlFor="photoDesc">Photo Description</label> <br />
                    <input 
                    type="text" 
                    id="photoDesc" 
                    name="photoDesc" 
                    value={photo.photoDesc} 
                    onChange={handleChange}/>
                </div>
                <div className="photoDate">
                    <label 
                    htmlFor="photoDate">Photo Date</label> <br />
                    <textarea 
                    type="text" 
                    id="photoDate" 
                    name="photoDate" 
                    value={photo.photoDate} 
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
                <button>Finish editing!</button>
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

export default connect(mapStateToProps, {fetchPhotoById, editPhoto})(EditPhoto)