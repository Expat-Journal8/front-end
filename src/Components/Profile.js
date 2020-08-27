import React, {useState, useEffect} from "react";
//import { date } from "yup";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../api/axiosWithAuth';
import {fetchUserData} from '../actions/index';

const Profile = props =>{
    const [userData, setUserData] = useState('testing');
    const params = useParams();
    const history = useHistory();

    console.log('props are', props)

    useEffect(() => {
        axiosWithAuth().get(`/api/users/${params.id}`)
        .then(response => {
            console.log(response);
            setUserData(response.data);
        })
        .catch(error => {
            console.log(error.message);
        })
    }, [])

    const takeToEditPage = () => {
        let path=`/Profile/${params.id}/editProfile`
        history.push(path);
    }
    
    // so when the window reloads (in login action) the state disappears
        // I have this fetchUserData to work around that, but it says I am unauthorized 

    return(
        <div className="profileWrap">
            <header>
                <h1>WELCOME {userData.username}</h1>
            </header>
            <div className="personalInfo">
                <h5>name: {userData.firstName} {userData.lastName}</h5>
                <h5>email: {userData.email}</h5>
                <h5>password: {userData.password}</h5>
                <button onClick={takeToEditPage}>edit</button>
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