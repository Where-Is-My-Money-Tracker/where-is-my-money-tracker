import React, { Component } from 'react';
import { getToken } from '../fetch-utils.js';
import '../Styles/SignInForm.css';
import '../Styles/SignUpForm.css';

class Signup extends Component {
    state = { email: '', password: '' };
    handleSubmit = async (e) => {
        e.preventDefault();
        const token = await getToken(
            {
                email: this.state.email,
                password: this.state.password,
            }, 'signup'
        );
        this.props.setToken(token);
        this.props.history.push('/user');
    };
    render() { 
        return (
            <>
                <h1 id="signinHeader">Sign-up</h1>
                <section className="signinForm">
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-control'>
                            <label>Email: </label>
                            <input
                                type='email'
                                onChange={ (e) => {
                                    this.setState({ email: e.target.value })
                                }}/>
                        </div>
                        <div className='form-control'>
                            <label>Password: </label>
                            <input
                                type='password'
                                onChange={ (e) => {
                                    this.setState({ password: e.target.value })
                                }}/>
                        </div>
                        <div className="buttonDiv">
                            <button>Sign-up</button>
                        </div>
                    </form>
                </section>
            </>
        );
    }
}
 
export default Signup;