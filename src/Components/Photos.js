import React, {useState, useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchPhotos } from '../actions';

const Photos = props => {
    const [photos, setPhotos] = useState([]);
    const history = useHistory();

    useEffect(() => {
        props.fetchPhotos(setPhotos);
    }, [])

    const takeToAddPhotoPage = () => {
        history.push(`/Photos/addPhoto`);
    }

    return (
        <div className='photosBodyContainer'>
            <div className='addPhotoButtonContainer'>
                <button onClick={takeToAddPhotoPage}>Add your own photo here!</button>
            </div>
            <div className='photosContainer'>
                {photos.map(photo => 
                    <Link to={`/Photo/${photo.id}`}>
                        <div className='photoCard'>
                            {photo.id} {photo.photoDate} <br />
                            <img src={photo.photoLink} /> <br />
                            {photo.photoDesc}
                        </div>  
                    </Link>  
                )}
            </div>
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

export default connect(mapStateToProps, {fetchPhotos})(Photos);