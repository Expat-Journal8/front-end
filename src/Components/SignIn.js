import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import {useLocation} from 'react-router-dom';
import {login, registerUser} from '../actions/index';
import {connect} from 'react-redux';

const SignIn = props => {
    const location = useLocation();
    const [user, setUser] = useState({
        first_name: '',
        email: '',
        username: '',
        password: ''
    });

    const handleChanges = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        //location.pathname == '/SignIn' ? //login action : register action
        location.pathname === '/SignIn' ? props.login(user) : props.registerUser(user);
    }

    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <>
        {location.pathname === '/SignUp' ? 
            <div className='signUpForm'><h1>Sign Up here!</h1></div> :
            <div className='signInForm'><h1>Sign In here!</h1></div>
            }
            {/* input username and password here */}
            <input name='username' type='text' onChange={handleChanges} placeholder='username' />
            <input name='password' type='text' onChange={handleChanges} placeholder='password' />
            <button onClick={onSubmit}>{location.pathname === '/SignIn' ? 'Sign In!' : 'Sign Up!'}</button>
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

export default connect(mapStateToProps, {login, registerUser})(SignIn);