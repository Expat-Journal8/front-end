import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/logo.png"

const Nav = props => {
    const location = useLocation();

    return (
        <>
            {location.pathname === '/SignUp' ? 
                <div className="navigation">
                    <img src={logo} alt="logo, a cozy tent next to a tree. "/>
                    <Link to="/SignUp"><h3>JOIN</h3></Link>
                    <Link to="/SignIn"><h3>LOGIN</h3></Link>
                </div>
            : 
            location.pathname === '/SignIn' ? 
                <div className="navigation">
                    <img src={logo} alt="logo, a cozy tent next to a tree. "/>
                    <Link to="/SignUp"><h3>JOIN</h3></Link>
                    <Link to="/SignIn"><h3>LOGIN</h3></Link>
                </div> 
                :
                location.pathname === '/' ? 
                <div className="navigation">
                    <img src={logo} alt="logo, a cozy tent next to a tree. "/>
                    <Link to="/SignUp"><h3>JOIN</h3></Link>
                    <Link to="/SignIn"><h3>LOGIN</h3></Link>
                </div> 
                :
                <nav className="NavII">
                    <img src={logo} alt=""/>
                    <ul>
                        <li>
                        <Link to="/Stories"><button>Stories</button> </Link>
                        </li>
                        <li>
                            <Link to="/Photos"><button>Photos</button> </Link>
                        </li>
                        <li>
                            <Link to="/Postcard"><button>Postcards</button></Link>
                        </li>
                        <li>
                            <Link to="/UsersList"><button>Users List</button></Link>
                        </li>
                        <li>
                            <Link to="/SignIn"><button onClick={() => {localStorage.removeItem('token')}}>Sign Out</button></Link>
                        </li>
                    </ul>
                </nav>
            }
        </>
    )
};

export default Nav;