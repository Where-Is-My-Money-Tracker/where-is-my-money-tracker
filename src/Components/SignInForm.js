import React, { Component } from 'react';
import { getToken } from '../fetch-utils.js';

class Signin extends Component {
    state = { email: '', password: '' };

    handleSubmit = async (event) => {
        event.preventDefault();

        const token = await getToken(
            {
                email: this.state.email,
                password: this.state.password,
            }, 'signin'
        );
        this.props.setToken(token);

        this.props.history.push('/user');
    };

    render() { 
        return (
            <>
                <h1>Sign-in</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-control'>
                        <label>Email: </label>
                        <input
                            type='email'
                            onChange={ (event) => {
                                this.setState({ email: event.target.value })
                            }}
                        />
                    </div>
                    <div className='form-control'>
                        <label>Password: </label>
                        <input
                            type='password'
                            onChange={ (event) => {
                                this.setState({ password: event.target.value })
                            }}
                        />
                    </div>
                    <button>Sign-in</button>
                </form>
            </>
        );
    }
}
 
export default Signin;