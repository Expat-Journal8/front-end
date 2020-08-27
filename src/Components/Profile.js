import React, {useState, useEffect} from "react";
//import { date } from "yup";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
//import {axiosWithAuth} from '../api/axiosWithAuth';
import {fetchUserData} from '../actions/index';

const Profile = props =>{
    const [userData, setUserData] = useState();

    useEffect(() => {
        props.fetchUserData();
    }, [])
    
    // so when the window reloads (in login action) the state disappears
        // I have this fetchUserData to work around that, but it says I am unauthorized 

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

const mapStateToProps = (state) => {
    return {
        users: [], 
        user: {}, 
        registerSuccessMessage: '',
        user_stories: {}, 
        isLoading: false, 
        error: null 
    }
}

export default connect(mapStateToProps, {fetchUserData})(Profile);