import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchPhotoById, deletePhoto } from '../actions/index';

const Photo = props => {
    const [photo, setPhoto] = useState({});
    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        props.fetchPhotoById(setPhoto, params);
    }, [])

    const deletePhoto = () => {
      props.deletePhoto(params);
    }

    const takeToEditPhotoPage = () => {
      history.push(`/Photo/${params.id}/editPhoto`)
    }

    return (
        <div className='photoBodyContainer'>
            <div className='photoContainer'>
              <div className='IDandDateContainer'>
                <span className='id'>{photo.id}</span> <span className='date'>{photo.photoDate}</span> <br />
              </div>
                <img src={photo.photoLink} /> <br />
                {photo.photoDesc}
            </div>
            <button className='editPhotoButton' onClick={takeToEditPhotoPage}>Edit</button>
            <button className='deletePhotoButton' onClick={deletePhoto}>Delete</button>
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

export default connect(mapStateToProps, {fetchPhotoById, deletePhoto})(Photo);