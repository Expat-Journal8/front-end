//get request to /api/users/:id/stories -- will return posts created by id specific users

import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchStories} from '../actions/index';

const Stories = props => {
   // const [stories, setStories] = useState();

    useEffect(() => {
        props.fetchStories();
    })
    
    return (
        <div className='storiesCard'>
            {/* {stories.map(story => {
                return (<div className='story'>{story}</div>)
            })} */}
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

export default connect(mapStateToProps, {fetchStories})(Stories);