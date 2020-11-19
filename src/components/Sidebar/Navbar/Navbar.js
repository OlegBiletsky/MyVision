import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
            <NavLink to="/homepage"  className="Navbar-link" activeClassName="active-Navbar-link"> 
                <p className="Navbar-item">
                    Home
                </p>
            </NavLink>
            <NavLink to="/about" className="Navbar-link" activeClassName="active-Navbar-link">
                <p className="Navbar-item">
                    About
                </p>
            </NavLink>
            <NavLink to="/work" className="Navbar-link" activeClassName="active-Navbar-link">
                <p className="Navbar-item">
                    Work
                </p>
            </NavLink>
            
            <NavLink to="/blog" className="Navbar-link" activeClassName="active-Navbar-link">
                <p className="Navbar-item">
                    Blog
                </p>
            </NavLink>
            <NavLink to="/contacts" className="Navbar-link" activeClassName="active-Navbar-link">
                <p className="Navbar-item">
                    Contacts
                </p>
            </NavLink>
    </nav>
  );
}
export default Navbar; 