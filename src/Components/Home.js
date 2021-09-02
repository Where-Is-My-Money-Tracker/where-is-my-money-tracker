import React, { Component } from 'react';
import Signin from './SignInForm.js';
import { NavLink } from 'react-router-dom';
import './Home.css';
import { getDadJoke } from '../fetch-utils.js';

class Home extends Component {
    state = { 
        joke: ''
     }

    componentDidMount = async() => {
        const jokeObject = await getDadJoke()
        this.setState({joke: jokeObject.joke})
    }
    handleJoke = async() => {
        const jokeObject = await getDadJoke()
        this.setState({joke: jokeObject.joke})
    }
    
    render() { 
        return ( 
            <section className="container">
                <article>
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
                    <div className="financeLinkDiv">
                        <NavLink id="financeLink" to='/user'>Check Your Finances</NavLink>
                    </div>
                    }
                </article>
                <article className="dadJoke">
                    <div>
                        <p>Dad Joke of the Day:</p>
                        <span>{this.state.joke}</span><br/>
                        <div className="divButton">
                        <button onClick={()=> {this.handleJoke()}}>New Dad Joke</button>
                        </div>
                    </div>
                </article>
            </section>
         );
    }
}
 
export default Home;