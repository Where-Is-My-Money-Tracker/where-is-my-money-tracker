import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header">
                <NavLink activeClassName='selected' exact to="/">Home</NavLink>
                <NavLink activeClassName='selected' to="/user">View Purchases</NavLink>
                <NavLink activeClassName='selected' to="/aboutus">About Us</NavLink>
                <button onClick={() => {
                    localStorage.removeItem('TOKEN')
                    window.location.replace('/')
                }}>Logout</button>
            </div>
         );
    }
}
 
export default Header;