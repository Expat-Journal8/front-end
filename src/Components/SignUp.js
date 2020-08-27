import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const joinSchema = yup.object().shape({
    firstName: yup
                    .string()
                    .min(3)
                    .required("a user needs a face... uh, name."),
    lastName: yup
                    .string()
                    .min(3)
                    .required("Please enter your last name here."),
    gender: yup
                    .string()
                    .required("Please enter your gender here."),
    age: yup   
                    .number()
                    .required("Please enter your age here"),
    email:yup
            .string()
            .email()
            .required("a user needs an email"),
    username: yup
                .string()
                .min(3)
                .required("a user needs a nickname."),
    password: yup
                .string()
                .min(10, 'Must have ${min} characters minimum.')
                .matches( (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{10,}$/), "must contain uppercase letter, number, lowercase letters.")
                .required("password is required.")
});

const SignUp = () =>{
    
    const [ userSUP, setUserSUP ] = useState({ firstName:"", lastName: '', gender: '', age: '', email:"", username:"", password:"" });
    const [ errors, setErrors ] = useState({ firstName:"", lastName: '', gender: '', age: '', email:"", username:"", password:"" });
    const [ buttonDisabled, setButtonDisabled ] = useState(true);
    //const [ replyState, setReplyState ] = useState([]);
    //const [postTo] = useState("https://reqres.in/api/users");

    useEffect( ()=>{ joinSchema.isValid(userSUP).then( valid => {setButtonDisabled(!valid);} ) },[userSUP] );

    const validateChange =e=> {
        yup
        .reach(joinSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => { 
            setErrors ({ 
                ...errors,
                 [e.target.name] : "" 
                });
             })
        .catch( error => {
            setErrors({
                ...errors, 
                [e.target.name]: error.errors[0] 
                });
            });
        }

        const handleChange =e=>{
            e.persist();
            const member = {
                ...userSUP,
                [e.target.name]: e.target.value 
            }
                validateChange(e);
                setUserSUP(member);
        };
        
        useEffect(() => {
            console.log(userSUP);
        }, [userSUP])

    const handleSubmit =e=>{
        e.preventDefault();
        axios.post('https://aa-expat.herokuapp.com/api/auth/register', userSUP)
            .then( reply => console.log(reply) )
            .catch( error => console.log(error) );
    };


    return(
        <div className="joinWrap">
            <h1>Join us...</h1>
            <form onSubmit={handleSubmit}>
                <div className="firstName">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" id="firstName" name="firstName" value={userSUP.firstName} placeholder="not case sensitive" onChange={handleChange}/>
                    { errors.firstName.length > 0 ? <span className="errd">{errors.firstName}</span> : null }
                </div>
                <div className="lastName">
                    <label htmlFor="lastName">Last Name:
                    <input type='text' id='lastName' name='lastName' value={userSUP.lastName} placeholder='Last name' onChange={handleChange} />
                    { errors.lastName.length > 0 ? <span className='errd'>{errors.lastName}</span> : null }
                    </label>
                </div>
                <div className="gender">
                    <label htmlFor="gender">Gender: 
                    <input type='text' id='gender' name='gender' value={userSUP.gender} placeholder='Gender' onChange={handleChange} />
                    {errors.gender.length > 0 ? <span className='errd'>{errors.gender}</span> : null }
                    </label>
                </div>
                <div className='age'>
                    <label htmlFor='age'>Age: 
                    <input type='number' id='age' name='age' value={userSUP.age} placeholder='Age' onChange={handleChange} />
                    {errors.age.length > 0 ? <span className='errd'>{errors.age}</span> : null }
                    </label>
                </div>
                <div className="email">
                    <label htmlFor="email">E-Mail Address: </label>
                    <input type="email" id="email" name="email" value={userSUP.email} placeholder="use valid address" onChange={handleChange}/>
                    { errors.email.length > 0 ? <span className="errd">{errors.email}</span> : null }
                </div>
                <div className="username">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" name="username" value={userSUP.username} onChange={handleChange} placeholder="not case sensitive"/>
                    { errors.username.length > 0 ? <span className="errd">{errors.username}</span> : null }
                </div>
                <div className="password">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" value={userSUP.password} onChange={handleChange} placeholder="secret pass phrase"/>
                    { errors.password.length > 0 ? <span className="errd">{errors.password}</span> : null }
                </div>
                <button disabled={buttonDisabled}>{!buttonDisabled === true ? "Submit" : "Invalid"}</button>
            </form>
        </div>
    )
}    

export default SignUp;