import React, {useState, useEffect} from "react";
import { date } from "yup";
import {Link} from "react-router-dom";
import {axiosWithAuth} from '../api/axiosWithAuth';

const Profile =()=>{
    const [userData, setUserData] = useState();

    useEffect(() => {
        axiosWithAuth().get(`https://aa-expat.herokuapp.com/api/users/:id`)
                .then(response => {
                    console.log(response);
                    setUserData(response.data);
                })
                .catch(error => {
                    console.log(error.message);
                })
    }, [])
    
    return(
        <div className="profileWrap">
            <header>
                <h1>WELCOME USERNAME</h1>
            </header>
            <div className="personalInfo">
                name:
                email:
                password:
                <button>edit</button>
            </div>
            <div className="photos">
            <h3>recent photos</h3>
                <ul>
                    <li><span>date</span><p>information</p></li>
                    <li><span>date</span><p>information</p></li>
                    <li><span>date</span><p>information</p></li>
                </ul>
            <Link to="/Photos">more...</Link>
            </div>
        </div>

    )
};

export default Profile;