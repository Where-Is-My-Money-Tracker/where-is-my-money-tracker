import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <NavLink to="/logout">Logout</NavLink>
            </>
         );
    }
}
 
export default Header;