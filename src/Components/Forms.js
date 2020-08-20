import React from "react";

//validation ~ yup schema




export default function Forms(){
    //state for user data {id:"", first_name:"",email:"",username:"",password:""}
    //validation ~ state for err {id:"", first_name:"",email:"",username:"",password:""}
    
    /*minions
        handleChange()=>{update state}
        handleSubmit()=>{submit user data to profile}
        useEffect=>validate[state changes v state submit?]
        inlineValidation(setErr) ///err ---> print under input 

        -------flow---------
        form data -> profile -> album -> add photo + story -> 
        postcard --> album <--> edit +-> postcard +-> profile
    */
    return (
        //link sign-in, sign-up, album -----coming from ismails website? just match routes to links /signin /signup
        //routes for sign in sign up
        /**
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
    )
};