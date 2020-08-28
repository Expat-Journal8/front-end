import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {fetchUserData} from '../actions/index';
import UserStories from '../Components/UserStories';

const Profile = props =>{
    const [userData, setUserData] = useState('testing');
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        props.fetchUserData(params, setUserData);
    }, [])

    const takeToEditPage = () => {
        let path=`/Profile/${params.id}/editProfile`
        history.push(path);
    }

    return(
        <div className="profileWrap">
            <header>
                <h1>WELCOME {userData.username}</h1>
            </header>
            <div className="personalInfo">
                <h5>name: {userData.firstName} {userData.lastName}</h5> <br />
                <h5>email: {userData.email}</h5> <br />
                <h5>gender: {userData.gender}</h5> <br />
                <button className='editProfileButton' onClick={takeToEditPage}>edit</button> <br />
            </div>
            <div className='storiesContainer'>
                <h3 className='recentStoriesLabel'>recent stories</h3>
                <UserStories />
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
