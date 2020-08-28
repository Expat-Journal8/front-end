import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import {useLocation} from 'react-router-dom';
import {login, registerUser} from '../actions/index';
import {connect} from 'react-redux';
import * as yup from 'yup';

const SignIn = props => {
    const location = useLocation();
    const [user, setUser] = useState({username: '', password: ''});
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [err, setErr] = useState({username: '', password: ''});
    


    // const handleChanges = e => {
    //     setUser({...user, [e.target.name]: e.target.value})
    // }

    const onSubmit = e => {
        e.preventDefault();
        location.pathname === '/SignIn' ? props.login(user) : props.registerUser(user);
    }

    const loginSchema = yup.object().shape({
        username: yup
            .string()
            .min(3)
            .required("A user must have a nickname."),
        password: yup
            .string()
            .min(10, "Must have ${min} characters minimum.")
            .matches( (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{10,}$/), "must contain uppercase letter, number, lowercase letters.")
            .required("password is required.")
    });

    const validateChange = e => {
        yup
            .reach(loginSchema, e.target.name)
            .validate(e.target.value)
            .then( valid => { 
                setErr({
                     ...err,
                      [e.target.name]: "" 
                    });
                })
            .catch( error =>{ 
                setErr({ 
                    ...err,
                     [e.target.name]: error.errors[0] 
                    });
                })
    };

    const handleChange = e => {
        e.persist();
        setUser({...user, [e.target.name]: e.target.value});
        validateChange(e);
    }

    useEffect(
        ()=>{
            loginSchema.isValid(user).then(valid =>{
                setButtonDisabled(!valid);
            });
        }, [user]
    );

    return (
        <>
            <div className='signInUpForm'>
                {location.pathname === '/SignUp' ? 
                    <div className='signUpForm'><h1>Sign Up here!</h1></div> :
                    <div className='signInForm'><h1>Sign In here!</h1></div>
                }
                {/* input username and password here */}
                <div className='userName'>
                    <input name='username' type='text' onChange={handleChange} placeholder='username' />
                    { err.username.length > 0 ? <span className="errd">{err.username}</span> : null }
                </div>
                <div className='password'>
                    <input name='password' type='text' onChange={handleChange} placeholder='password' />
                    {err.password.length > 0 ? <span className="errd">{err.password}</span> : null }
                </div>
                <button onClick={onSubmit} disabled={buttonDisabled}>{location.pathname === '/SignIn' ? 'Sign In!' : 'Sign Up!'}</button>
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

export default connect(mapStateToProps, {login, registerUser})(SignIn);
