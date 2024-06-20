import React from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="navbar">
            <div className="gradient"></div>
            <div className="links">
                <Link to="/">Signup</Link>
                <Link to="/podcasts">Podcast</Link>
                <Link to="/start-a-podcast">Start A Podcast</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </div>
    )
}

export default Header;

