import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/donation">Add Events</Link>
                </li>
                <li>
                    <Link to="/reglist">Registerd Data</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li> 
            </ul>
        </nav>
    );
};

export default Header;