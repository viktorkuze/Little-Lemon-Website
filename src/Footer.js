import React from "react";
import logo from './Logo .svg';

const Footer = () => {

    return ( 
        <footer>
            <section>
                <div className="footer-info">
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <h3>Follow Us</h3>
                <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                <ul>
                <li>Address:<br/> 600 E Grand Ave, Chicago, IL 60611, Unated States</li>
                    <li>Phone: <br/> +1 444 555 666</li>
                    <li>Email: <br/> littlelemmon@restaurant.com</li>
                </ul>
                </div>
            </section>
        </footer>
     );
}
 
export default Footer;