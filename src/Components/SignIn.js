import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation, Link} from 'react-router-dom';

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
    }

    return (
        <>
        {location.pathname == '/SignUp' ? 
            <div className='signUpForm'><h1>Sign Up here!</h1></div> :
            <div className='signInForm'><h1>Sign In here!</h1></div>
            }
        </>
    )
}

export default SignIn;