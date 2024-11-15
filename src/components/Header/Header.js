import { useContext } from "react";

import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

const Header = () => {
    const { user  } = useContext(AuthContext); 

    let guestNavigation = (
        <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="register">Register</Link></li>
        </>
    )
    let userNavigation = ( 
        <>
        <h1>Welcome, {user.email}</h1>
            <li><Link to="/profile-page">Profile</Link></li>
            <li><Link to="create-page">Create Event</Link></li>
            <li><Link to="/logout">Logout</Link></li>
        </>
    )
    return (
        <header>
            <nav>
                <Link to="/">Theater</Link>
                <ul>
                    {user.email
                    ? userNavigation
                    : guestNavigation
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;