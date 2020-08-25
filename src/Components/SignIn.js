import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import {useLocation, Link} from 'react-router-dom';
import {login, registerUser} from '../actions/index';

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
        location.pathname == '/SignIn' ? login() : registerUser();
        //how would I implement props.history.push('/SignIn') here after registerUser() and props.history.push('/Profile') after login();
    }



    return (
        <>
        {location.pathname == '/SignUp' ? 
            <div className='signUpForm'><h1>Sign Up here!</h1></div> :
            <div className='signInForm'><h1>Sign In here!</h1></div>
            }
            {/* input username and password here */}
            <input name='username' type='text' onChange={handleChanges} placeholder='username' />
            <input name='password' type='text' onChange={handleChanges} placeholder='password' />
            <button onClick={onSubmit}></button>
        </>
    )
}

export default SignIn;