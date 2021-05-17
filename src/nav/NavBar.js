import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import "./NavBar.css";
import logo from '../images/d20-grey.png'

export const NavBar = () => {
    const history = useHistory();

    const handleLogout = () => {
        sessionStorage.clear();
        history.push("/login")
    }

    return (

        <nav className="navbar">
            <div className="nav-left">
                <img className="logo" src={logo} alt="logo" />
                <h1 className="nav-title">The Tavern</h1>
            </div>
            <ul className="navList">
                <li className="nav-item">
                    <NavLink activeClassName="selected" className="nav-link" to="/characters">Characters</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="selected" className="nav-link" to="/spells">Spell Book</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="selected" className="nav-link" to="/dice">Dice Roller</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="selected" className="nav-link" onClick={handleLogout} to="/Login"> Logout </NavLink>
                </li>
            </ul>
        </nav>
    )
}