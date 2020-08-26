import React, {useEffect, useState} from 'react';
import {axiosWithAuth} from '../api/axiosWithAuth';
import axios from 'axios';

//get request to /api/users -- will return array of users

//so we want a page that will list all of our current registered users?

const ListUsers = props =>{
    const [data, setData] = useState([{username:'hello world!'}]);
    useEffect(()=>{
        axiosWithAuth().get('https://aa-expat.herokuapp.com/api/users')
            .then(res=>{
                console.log(res)
                setData(res.data);
            })
            .catch(err=>{
                console.log(err);
            });
    }, [])

    return(
        <div>
            {data.map(item=>{return(<div className="UsersCard">Username: {item.username} <br /> Age: {item.age} <br /> Email: {item.email} </div>)})}

            <h1> TEsting!</h1>

        </div>
    )
}

export default ListUsers;

//get request to /api/users/:id -- will return users specified by ID