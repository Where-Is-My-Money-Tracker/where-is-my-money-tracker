import React, { Component } from 'react';
import Signin from './SignInForm.js';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <section>
                    <h1>Where's My Money</h1>
                </section>
                <section>
                    {!this.props.token ? 
                    <div>
                        <Signin/> 
                        <NavLink to="/signup">Sign-up</NavLink> 
                    </div> :
                        <></>
                    }
                </section>
                <section>
                    <NavLink to="/aboutus">About the Developers</NavLink>
                </section>
            </div>
         );
    }
}
 
export default Home;