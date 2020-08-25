import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png"

const Nav =()=> {
    return(
        <div className="navigation">
            <img src={logo} alt="logo, a cozy tent next to a tree. "/>
            <Link to="/SignUp"><h3>JOIN</h3></Link>
            <Link to="/SignIn"><h3>LOGIN</h3></Link>
        </div>
    )
};

export default Nav;