import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <button onClick={() => {
                    localStorage.removeItem('TOKEN')
                    window.location.replace('/')
                }}>
                Logout</button>
            </>
         );
    }
}
 
export default Header;