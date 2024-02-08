import React, {useState} from "react";
import logo from './Logo .svg';

const Nav = () => {
    const [menuClicked,setMenuClicked] = useState(false);

    const menuTriggered = () => {
        setMenuClicked(!menuClicked);
    };

    return ( 
        <nav className={`navbar ${menuClicked} ? "open" : ""}`}>
            <a href='/' className="logo">
                <img src={logo} alt='logo'/>
            </a>
            <div className="menu-icon" onClick= {menuTriggered}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${menuClicked ? "visible" : ""}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/ourmenu">Menu</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/booking">Book a table</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
        </nav>
     );
};
 
export default Nav;