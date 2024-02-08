import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return ( 
        <header className="header">
            <section className="section">
                <div>
                    <h1>Litte Lemon Restaurant</h1>
                    <p>Traditional food and music, vine and drinks is what awaits you at Little Lemon Restaurant.
                        <br/>Good service is guaranteed.
                    </p>
                    <p>
                        Our restaurant is open every day from 11:00 AM to 00:00 AM.
                        <br/> Book a table online, or call our number: +1 444 555 666
                    </p>
                    <Link to="booking">
                        <button aria-label="On Click">Book a table</button>
                    </Link>
                </div>
            </section>
        </header>
     );
}
 
export default Header;