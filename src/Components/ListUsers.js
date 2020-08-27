import React, {useEffect, useState} from 'react';
//import {axiosWithAuth} from '../api/axiosWithAuth';
//import axios from 'axios';
import {connect} from 'react-redux';
import {useParams, Link} from 'react-router-dom';
import {fetchUsers} from '../actions/index';

//get request to /api/users -- will return array of users

const ListUsers = props =>{
    const [data, setData] = useState([{username:'hello world!'}]);
    const params = useParams();
    const path = `/Profile/${params.id}`

    // function myFunction(id) {
    //    alert(item.id);
    // }

    useEffect(() => {
        props.fetchUsers();
    }, [])

    return(
        <div className='usersListContainer'>
            {props.users.map(item=>{return(
                <div className='usersListCard'>
                    <Link className='link' to={`/Profile/${item.id}`}>
                        Username: {item.username} <br /> Name: {item.firstName} <br /> ID: {item.id} <br /> Email: {item.email}
                    </Link>
                </div>
                )})}
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