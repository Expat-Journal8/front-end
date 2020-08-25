import React from "react";
import {Link} from "react-router-dom";

const Profile =()=>{
    
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
            <Link to="/Photos"><button>more...</button></Link>
            </div>
            <div className="stories">
                <ul>

                </ul>
            </div>
        </div>

    )
};

export default Profile;