import React, { useContext } from 'react';
import './Header.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="top-banner">
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Dreamland Ride</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ml-auto d-flex align-items-center">
                            <Link class="nav-link" aria-current="page" to="/home">Home</Link>
                            <Link class="nav-link" to="/destination">Destination</Link>
                            <Link class="nav-link" to="/blog">Blog</Link>
                            <Link class="nav-link" to="/contact">Contact</Link>
                            {loggedInUser.name ? <Link class="nav-link active" to="/">{loggedInUser.name}</Link> : <Link to="/login"><button class="btn btn-danger" type="login">Login</button></Link>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </div>
    );
};

export default Header;
