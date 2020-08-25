import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

const joinSchema = yup.object().shape({
    first_name: yup.string().min(3).required("a user needs a face... uh, name."),
    email:yup.email().required("a user needs an email"),
    username:yup.string().min(3).required("a user needs a nickname."),
    password:yup.string().password().required("please enter your password.")
});

const SignUp = () =>{
    
    const [ userSup, setUserSUP ] = useState({ first_name:"", email:"", username:"", password:"" });
    const [ errors, setErrors ] = useState({ first_name:"", email:"", username:"", password:"" });
    const [ buttonDisabled, setButtonDisabled ] = useState(true);
    const [ replyState, setReplyState ] = useState([]);
    const [postTo] = useState("https://reqres.in/api/users");

    useEffect( ()=>{ joinSchema.isValid(userSUP).then( valid => {setButtonDisabled(!valid);} ) },[userSUP] );

    const validateChange =e=> {
        yup.reach(joinSchema, e.target.name).validate(e.target.value).then({
            setErrors({...errors, [e.target.name]:""});   })
            .catch( error=>{...errors, [e.target.name: error.errors[0]]} )
    }
    
    const handleSubmit =()=>{
    
    };

    const handleChange =()=>{

    };

    return(
        <form onSubmit={handleSubmit}>
            <span>hello</span>
        </form>
        
    )
}

export default SignUp;