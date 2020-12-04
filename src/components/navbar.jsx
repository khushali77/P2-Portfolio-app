import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <ul className="links">
         <li className="brand"><Link to='/'>Khushali</Link></li>
         <li><Link to='/blogs'>Blogs</Link></li>
         <li><Link to='/about'>About</Link></li>
         <li><Link to='/projects'>Projects</Link></li>
      </ul>
    );
}

export default Navbar;

