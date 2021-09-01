import React, { Component } from 'react';
import Signin from './SignInForm.js';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    state = {  }
    
    render() { 
        return ( 
            <section>
                <article>
                    {/* put more things here? Heading? Welcome message? */}
                    {!this.props.token ? 
                    <div>
                        <Signin
                        setToken={this.props.setToken}
                        history={this.props.history}
                        /> 
                        <NavLink to="/signup">Sign-up</NavLink> 
                    </div> :
                        <NavLink to='/user'>See Your Finances</NavLink>
                    }
                </article>
                <article>
                    <NavLink to="/aboutus">About the Developers</NavLink>
                </article>
            </section>
         );
    }
}
 
export default Home;