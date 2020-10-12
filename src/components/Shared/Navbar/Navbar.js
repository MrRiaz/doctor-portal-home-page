import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link className="nav-link mr-5" to="/home">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link mr-5" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link mr-5" to="/appointment">Dental Services</Link>
                    </li>
                    <li class="nav-item">
                        <Link className={`nav-link mr-5 ${window.location.pathname === '/appointment' ? 'text-secondary' : 'text-white'}`} to="/appointment">Review</Link>
                    </li>
                    <li class="nav-item">
                        <Link className={`nav-link mr-5 ${window.location.pathname === '/appointment' ? 'text-secondary' : 'text-white'}`} to="/dashboard/appointment">Blog</Link>
                    </li>
                    <li class="nav-item">
                        <Link className={`nav-link mr-5 ${window.location.pathname === '/appointment' ? 'text-secondary' : 'text-white'}`} to="/login">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;