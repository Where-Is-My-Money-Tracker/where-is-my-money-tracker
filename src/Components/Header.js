import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header">
                <NavLink to="/user">Back to Profile</NavLink>
                <NavLink to="/aboutus">About the Developers</NavLink>
                <button onClick={() => {
                    localStorage.removeItem('TOKEN')
                    window.location.replace('/')
                }}>Logout</button>
            </div>
         );
    }
}
 
export default Header;