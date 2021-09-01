import React, { Component } from 'react';
import Signin from './SignInForm.js';
import { NavLink } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    state = {  }
    
    render() { 
        return ( 
            <section className="container">
                <article>
                    {/* put more things here? Heading? Welcome message? */}
                    {!this.props.token ? 
                    <div id="signin">
                        <Signin
                        setToken={this.props.setToken}
                        history={this.props.history}
                        /> 
                        <article id="signupLink">
                            <p>New User:</p>
                            <NavLink to="/signup">Sign-up Here</NavLink> 
                        </article>
                    </div> :
                        <NavLink id="financeLink" to='/user'>See Your Finances</NavLink>
                    }
                </article>
            </section>
         );
    }
}
 
export default Home;