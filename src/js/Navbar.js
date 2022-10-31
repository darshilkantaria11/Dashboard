import React from 'react'
import { NavLink } from "react-router-dom";
import "../css/Navbar.css"
import logo from "../Images/logo.png";

export const Navbar = () => {
    return (
        <div className="constnav">
            <div className="wrappernav">

                <ul className="snapnav">
                <img className="imgs" src={logo} alt='' /> 
                    <li><NavLink className="navicon" to="/">Overview</NavLink></li>
                    <li><NavLink className="navicon" to="/partners">Partners</NavLink></li>
                    <li><NavLink className="navicon" to="/widgets">Widgets</NavLink></li>
                    <li><NavLink className="navicon" to="/apis">APIs</NavLink></li>
                </ul>


            </div>

        </div>
    )
}
export default Navbar;