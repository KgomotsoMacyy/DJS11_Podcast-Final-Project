import React from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { SignOut } from "firebase/auth";
import { clearUser } from "../../slices/userSlice";

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;
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

