import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./NavBar.css";
import logo from '../images/dice-twenty-faces-twenty.png'

export const NavBar = () => {
    const history = useHistory();

    const handleLogout = () => {
        sessionStorage.clear();
        history.push("/login")
    }

    return (

        <nav className="navbar">
            <img className="logo" src={logo} alt="logo" />
            <ul className="navList">
                <li className="nav-item">
                    <Link className="nav-link" to="/characters">Characters</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/spells">Spell Book</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dice">Dice Roller</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" onClick={handleLogout} to="/Login"> Logout </Link>
                </li>
            </ul>
        </nav>
    )
}