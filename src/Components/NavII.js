import React from "react"
import logo from "./assets/logo.png"
import {Link} from "react-router-dom";

const NavII=(props)=>{

    return(
        <nav className="NavII">
            <img src={logo} alt=""/>
           <h1>Welcome [Username]</h1>
            <ul>
                <li>
                   <Link to="/Stories"><button>Stories</button> </Link>
                </li>
                <li>
                    <Link to="/Photos"><button>Photos</button> </Link>
                </li>
                <li>
                    <Link to="./Postcard"><button>Postcards</button></Link>
                </li>
                <li>
                    <Link to="/"><button>Sign Out</button></Link>
                </li>
            </ul>
        </nav>
    )

};

export default NavII;