// put request to /api/users/:id -- will allow users to update their profile data

import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {axiosWithAuth} from '../api/axiosWithAuth';
import {editUserData, fetchUserData} from '../actions/index';

const EditUser = props => {
    const [user, setUser] = useState('')
    const params = useParams();
    const history = useHistory();
    
    const editUser = (data, e) => {
        e.preventDefault();
        axiosWithAuth().put(`api/users/${params.id}`, data)
            .then(response => {
                console.log(response);
                //setUser({...user})
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleChanges = e => {
        e.persist();
        setUser({...user, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        axiosWithAuth().get(`/api/users/${params.id}`)
            .then(response => {
                console.log(response);
                setUser(response.data);
                //dispatch({type: FETCH_USER_DATA_SUCCESS, payload: response.data})
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [])

    const deleteProfile = () => {
        axiosWithAuth().delete(`/api/users/${params.id}`)
            .then(response => {
                console.log(response);
                localStorage.removeItem('token');
                history.push('/SignUp');
            })
            .catch(error => {
                console.log(error);
            })
    }
    
        return (
            <>
            <form className='editUserForm' onSubmit={editUser}>
                <h3>Edit Profile !</h3>
                <div>Name</div>
                <input className='editInput' type='text' name='name' value={`${user.firstName} ${user.lastName}`} onChange={handleChanges} /> 
                <div>Email</div>
                <input className='editInput' type='text' name='email' value={user.email} onChange={handleChanges} />
                <div>Password</div>
                <input className='editInput' type='text' name='password' value={user.password} onChange={handleChanges} />
                <button className='submitButton'>Submit</button>
            </form>
            <div className='deleteProfile'>
                <button className='deleteProfileButton' onClick={deleteProfile}>Delete Profile</button>
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

export default connect(mapStateToProps, {editUserData, fetchUserData})(EditUser);