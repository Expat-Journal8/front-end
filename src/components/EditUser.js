import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {editUserData, fetchUserData, deleteProfile} from '../actions/index';

const EditUser = props => {
    const [user, setUser] = useState({name: '', email: '', password: ''})
    const params = useParams();
    
    const editUser = e => {
        e.preventDefault();
        props.editUserData(params, user);
    }

    const handleChanges = e => {
        e.persist();
        setUser({...user, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        props.fetchUserData(params, setUser);
    }, [])

    const deleteOnClick = () => {
        props.deleteProfile(params)
    }
    
        return (
            <>
            <form className='editUserForm' onSubmit={editUser}>
                <h3>Edit Profile !</h3>
                <div>Name</div>
                <input className='editInput' type='text' name='firstName' value={user.firstName} onChange={handleChanges} /> 
                <input className='editInput' type='text' name='lastName' value={user.lastName} onChange={handleChanges} /> 
                <div>Email</div>
                <input className='editInput' type='text' name='email' value={user.email} onChange={handleChanges} />
                <div>Password</div>
                <input className='editInput' type='text' name='password' value={user.password} onChange={handleChanges} />
                <button className='submitButton'>Submit</button>
            </form>
            <div className='deleteProfile'>
                <button className='deleteProfileButton' onClick={deleteOnClick}>Delete Profile</button>
            </div>
            </>
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

export default connect(mapStateToProps, {editUserData, fetchUserData, deleteProfile})(EditUser);