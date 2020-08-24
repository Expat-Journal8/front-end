import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import "../sass/SignIn.scss";


    const loginSchema = yup.object().shape({
            username: yup
                .string()
                .min(3)
                .required("A user must have a nickname."),
            password: yup
                .string()
                .min(10, "Must have ${min} characters minimum.")
                .matches( (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/), "must contain uppercase letter, number, special character.")
                .required("password is required.")
    });


const Forms = (props) => {
   //state for user data {id:"", first_name:"",email:"",username:"",password:""}
    const [ user, setUser ] = useState({ username:"", password:"" }); 
    //validation ~ state for err {id:"", first_name:"",email:"",username:"",password:""}
    const [ err, setErr ] = useState({ username:"", password:"" });
    //disable that button unless the proper shape is being used as input
    const [ buttonDisabled, setButtonDisabled ] = useState(true);
    //state for axios requests
    const [ replyState, setReplyState ] = useState([]);
    const [postTo] = useState("https://reqres.in/api/users");

    useEffect(
        ()=>{
            loginSchema.isValid(user).then(valid =>{
                setButtonDisabled(!valid);
            });
        }, [user]
    );

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
     
    const handleChange = e =>{
        e.persist();
        const member = { 
            ...user,
            [e.target.name]:
             e.target.value };
             validateChange(e);
             setUser(member);
        };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post(postTo, user)
            .then(reply => {
                setReplyState(reply.data) 
            })
            .catch(error=> console.log(error));
            setUser({username:"", password:""});
        };

   return (
        <div className="loginWrap">
            <form onSubmit={ handleSubmit }>
                <div className="name">
                    <label htmlFor="username">Username: </label>
                    <input id="username" name="username" value={user.username} placeholder="not case sensitive." type="text" onChange={handleChange}/>
                    { err.username.length > 0 ? <span className="errd">{err.username}</span> : null }
                </div>
                <div className="password">
                    <label htmlFor="password">Password: </label>
                    <input id="password" name="password" value={user.password} placeholder="secret input goes here." type="password" onChange={handleChange}/>
                    {err.password.length > 0 ? <span className="errd">{err.password}</span> : null }
                </div>
             <button disabled={ buttonDisabled }>{!buttonDisabled === true ? "Submit" : "Invalid"}</button>
            </form>
        </div>
    )
};

export default Forms;
    /*minions
        handleChange()=>{update state}
        handleSubmit()=>{submit user data to profile}
        useEffect=>validate[state changes v state submit?]
        inlineValidation(setErr) ///err ---> print under input 

        -------flow---------
        form data -> profile -> album -> add photo + story -> 
        postcard --> album <--> edit +-> postcard +-> profile

        link sign-in, sign-up, album -----coming from ismails website? just match routes to links /signin /signup
        routes for sign in sign up
        
         * form
         * --------------------------------------------
         * sign-up
         * [id will be generated? ignore in form]
         * first name:
         * email:
         * username:
         * password:
         * SUBMIT
         * ---------------------------------------------
         * sign -in
         * username:
         * password:
         * SUBMIT
        */