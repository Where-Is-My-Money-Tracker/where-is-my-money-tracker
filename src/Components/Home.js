import React, { Component } from 'react';
import Signin from './SignInForm.js';
import { NavLink } from 'react-router-dom';
import User from './User.js';

class Home extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div>
                <section>
                    {!this.props.token ? 
                    <div>
                        <Signin
                        setToken={this.props.setToken}
                        history={this.props.history}
                        /> 
                        <NavLink to="/signup">Sign-up</NavLink> 
                    </div> :
                        <User />
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