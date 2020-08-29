import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/logo.png"

const Nav = props => {
    const location = useLocation();

    return (
        <>
            {location.pathname === '/SignUp' ? 
                <div className="navigation">
                    <a href='https://expatjournal3.netlify.app/'><img src={logo} alt="logo, a cozy tent next to a tree. "/></a>
                    <Link to="/SignUp"><h3>JOIN</h3></Link>
                    <Link to="/SignIn"><h3>LOGIN</h3></Link>
                </div>
            : 
            location.pathname === '/SignIn' ? 
                <div className="navigation">
                    <a href='https://expatjournal3.netlify.app/'><img src={logo} alt="logo, a cozy tent next to a tree. "/></a>
                    <Link to="/SignUp"><h3>JOIN</h3></Link>
                    <Link to="/SignIn"><h3>LOGIN</h3></Link>
                </div> 
                :
                location.pathname === '/' ? 
                <div className="navigation">
                    <a href='https://expatjournal3.netlify.app/'><img src={logo} alt="logo, a cozy tent next to a tree. "/></a>
                    <Link to="/SignUp"><h3>JOIN</h3></Link>
                    <Link to="/SignIn"><h3>LOGIN</h3></Link>
                </div> 
                :
                <nav className="NavII">
                    <a href='https://expatjournal3.netlify.app/'><img src={logo} alt=""/></a>
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