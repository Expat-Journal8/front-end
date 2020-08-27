import React, {useEffect, useState} from 'react';
//import {axiosWithAuth} from '../api/axiosWithAuth';
//import axios from 'axios';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/index';

//get request to /api/users -- will return array of users

const ListUsers = props =>{
    //const [data, setData] = useState([{username:'hello world!'}]);

    useEffect(() => {
        props.fetchUsers();
    }, [])

    return(
        <div>
            {/* {data.map(item=>{return(<div className="UsersCard">Username: {item.username} <br /> Age: {item.age} <br /> Email: {item.email} </div>)})} */}
            <h1> I am here! </h1>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users, 
        user: {}, 
        registerSuccessMessage: '',
        user_stories: {}, 
        isLoading: false, 
        error: null 
    }
}

export default connect(mapStateToProps, {fetchUsers})(ListUsers);

//get request to /api/users/:id -- will return users specified by ID